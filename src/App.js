import React, { useEffect, useState } from "react";
import classNames from "classnames";
import './App.css';
import { applyVersion, createVersion, deleteVersion, getVersionResource, getVersions, getIncludeListFromItemType, publishSiteVersion, updateVersion } from './layout-version';
import { UserSession } from '@esri/arcgis-rest-auth';
import { cloneObject, getSiteById } from '@esri/hub-common';

const CLIENT_ID = 'Lmafo8GvkSnPwbek';
const PORTAL_URL = 'https://qaext.arcgis.com/sharing/rest';
const session = new UserSession({
  portal: PORTAL_URL,
});
let initialContext = { authentication: session };

const LOCAL_STORAGE_KEY = `__CONTEXT_${CLIENT_ID}`
// if we have a context in localStorage, we will use that as the initial context
const json = localStorage.getItem(LOCAL_STORAGE_KEY);
if (json) {
  const authentication = UserSession.deserialize(json);
  initialContext = { authentication };
}

const SITE_ID = '2b90df90e70549c1a256ebb6230f7451'; // brollywood: d4f484fe02324aaf86c4275a5ee72d3e

function App() {
  const [hubContext, setContext] = useState(initialContext);
  const [isAuthenticated, setIsAuthenticated] = useState(!!hubContext.authentication.username);
  const [siteId, setSiteId] = useState(SITE_ID);

  const signIn = async () => {
    const authentication = await UserSession.beginOAuth2({
      clientId: CLIENT_ID,
      redirectUri: "http://localhost:3000/redirect.html",
      portal: PORTAL_URL
    });

    const context = { authentication };
    setContext(context);
    setIsAuthenticated(!!context.authentication.username);
    localStorage.setItem(LOCAL_STORAGE_KEY, authentication.serialize());
  }

  const [site, setSite] = useState({});
  const [versions, setVersions] = useState([]);
  const [activeVersionName, setActiveVersion] = useState();
  const [activeVersionResource, setActiveVersionResource] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const site = await getSiteByVersion(siteId, activeVersionName, hubContext);
        let site = await getSiteById(siteId, hubContext);
        const versions = await getVersions(siteId, hubContext);
        let versionResource;
        if (activeVersionName) {
          versionResource = await getVersionResource(siteId, activeVersionName, hubContext);
          console.log('got version: ', versionResource);
          const includeList = getIncludeListFromItemType(site);
          site = applyVersion(site, versionResource, includeList);
        }
        console.log('got site: ', site);
        setSite(site);
        setActiveVersionResource(versionResource);
        setVersions(versions);
      } catch (error) {
        console.log("error getting site", error);
      }
    };

    fetchData();
  }, [ activeVersionName, hubContext, siteId ]);

  async function _createVersion () {
    // push something unique into the layout
    const layout = cloneObject(site.data.values.layout);
    layout.sections = [
      {
        containment: 'fixed',
        isFooter: false,
        rows:
          [
            {
              cards: [
                {
                  component: {
                    name: 'markdown-card',
                    settings: {
                      schemaVersion: 2.1,
                      markdown: `New Version: ${formatDate()}`,
                    }
                  },
                  newVersion: true,
                  width: 12
                }
              ]
            }
          ]
        }, ...layout.sections ];
    site.data.values.layout = layout;

    const version = await createVersion(site, hubContext);
    console.log('created version', version.name);
    setActiveVersion(version.name);
  }

  async function _updateVersion (versionName) {
    if (versionName) {
      // make it obvious that we updated the version
      const layout = cloneObject(site.data.values.layout);
      layout.sections[0].rows[0].cards[0].component.settings.markdown += `; Updated: ${formatDate()}`;
      site.data.values.layout = layout;

      await updateVersion(site, activeVersionResource, hubContext);
      // setActiveVersionResource(updatedVersion);
      console.log('updated version', versionName);

      // this is janky but... it's a demo
      setActiveVersion();
      setTimeout(() => {
        setActiveVersion(versionName);
      }, 10);
    }
  }

  async function _deleteVersion (versionName) {
    if (versionName) {
      await deleteVersion(site, versionName, hubContext);
      setActiveVersion();
    }
  }

  async function _publishVersion (versionName) {
    if (versionName) {
      // const versionResource = { ...activeVersionResource, data: mergeObjects(site.data.values.layout, activeVersionResource.data) };
      await publishSiteVersion(site, activeVersionResource, hubContext);
      // set the activeVersion to undefined which means the published site
      setActiveVersion();
    }
  }

  async function _selectVersion (version) {
    if (version?.name !== activeVersionName) {
      version = version?.name;
      setActiveVersion(version);
    }
  }

  function formatDate(dateStamp = Date.now()) {
    const date = new Date(dateStamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  function renderCard(card, idx) {
    let result = (
      <div className={`card-${card.width}`} key={idx}>
        {card.component.name}
      </div>
    );

    if (card.newVersion) {
      result = <div className="card-12 version" key={idx}>{card.component.settings.markdown}</div>;
    }

    return result;
  }

  function renderVersionInfo(site, versionResource) {
    let result = <h2>published (updated: {formatDate(site?.item?.modified)})</h2>
    if (versionResource) {
      result = <h2>{versionResource.name} (created: {formatDate(versionResource.created)}, updated: {formatDate(versionResource.updated)})</h2>
    }
    return result;
  }

  return (
    <div className="App">
      <div className="top">
        <div className="header">
          <h1>Site</h1>
          <input type="text" className="site-id" value={siteId} onChange={evt => setSiteId(evt.target.value)} />
          <h2>: {site?.item?.title}</h2>
          <div className="toolbar">
            {hubContext.authentication.username}
            <button type="button" disabled={isAuthenticated} onClick={signIn}>sign in</button>
          </div>
        </div>
        <h2>Versions</h2>
        <ul className="version-list">
          <li className={classNames({ active: !activeVersionName })} onClick={_ => _selectVersion()}>Published</li>
          {versions.map((version) => (
            <li className={classNames({ active: (version.name === activeVersionName) })} key={version.name}>
              <a onClick={_ => _selectVersion(version)}>{site.item.typeKeywords.includes(`hubSiteLayoutVersionPublished:${version.name}`) ? '* ' : ''}{version.name} (updated: {formatDate(version.updated)})</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div className="header">
          {renderVersionInfo(site, activeVersionResource)}
          <div className="toolbar">
            <button type="button" disabled={!isAuthenticated} onClick={_createVersion}>create new version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionName} onClick={_ => _updateVersion(activeVersionName)}>update version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionName} onClick={_ => _deleteVersion(activeVersionName)}>delete version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionName} onClick={_ => _publishVersion(activeVersionName)}>publish version</button>
            {/* <button>update version</button> */}
          </div>
        </div>
        <div className="preview">
          {site?.data?.values?.layout?.sections.map((section, idx) => (
            <div className="section" key={idx}>
              {section.rows.map((row, idx) => (
                <div className="row" key={idx}>
                  {row.cards.map(renderCard)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;