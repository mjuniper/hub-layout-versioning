import React, { useCallback, useEffect, useState } from "react";
import "@esri/calcite-components/dist/calcite/calcite.css";
import './App.css';
import { publishSiteVersion } from './item-version';
import { UserSession } from '@esri/arcgis-rest-auth';
import { CLIENT_ID, LOCAL_STORAGE_KEY, PORTAL_URL, SITE_ID } from './environment';
import {
  applyVersion,
  cloneObject,
  createVersion,
  deleteVersion,
  getSiteById,
  getVersion,
  // searchVersions,
  updateVersion
} from '@esri/hub-common';
// import "@esri/calcite-components/dist/components/calcite-pick-list";
// import "@esri/calcite-components/dist/components/calcite-pick-list-item";

function App(props) {
  const [hubContext, setContext] = useState(props.initialContext);
  window.context = hubContext;
  const [isAuthenticated, setIsAuthenticated] = useState(!!hubContext.authentication.username);
  const [siteId, setSiteId] = useState(SITE_ID);

  const href = window.location.href;
  const separator = href.endsWith('/') ? '' : '/';
  const redirectUri = `${href}${separator}redirect.html`;

  const signIn = async () => {
    const authentication = await UserSession.beginOAuth2({
      clientId: CLIENT_ID,
      redirectUri,
      portal: PORTAL_URL
    });

    const context = { authentication };
    setContext(context);
    setIsAuthenticated(!!context.authentication.username);
    localStorage.setItem(LOCAL_STORAGE_KEY, authentication.serialize());
  }

  const [site, setSite] = useState({});
  // const [versions, setVersions] = useState([]);
  const [activeVersionId, setActiveVersionId] = useState();
  const [publishedVersionId, setPublishedVersionId] = useState();
  const [activeVersionResource, setActiveVersionResource] = useState();
  const [newVersionName, setNewVersionName] = useState('');
  const [shouldShowHelp, setShouldShowHelp] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const site = await getSiteByVersion(siteId, activeVersionName, hubContext);
        let site = await getSiteById(siteId, hubContext);
        const _publishedVersionId = site.item.typeKeywords.find(tk => tk.startsWith('hubSiteLayoutVersionPublished:')).split(':')[1];
        setPublishedVersionId(_publishedVersionId);
        // const versions = await searchVersions(siteId, hubContext);
        // console.log(versions);
        let versionResource;
        if (activeVersionId) {
          versionResource = await getVersion(siteId, activeVersionId, hubContext);
          console.log('got version: ', versionResource);
          site = applyVersion(site, versionResource);
        }
        console.log('got site: ', site);
        setSite(site);
        setActiveVersionResource(versionResource);
        // setVersions(versions);
      } catch (error) {
        console.log("error getting site", error);
      }
    };

    fetchData();
  }, [ activeVersionId, hubContext, siteId ]);

  function selectVersion (event) {
    const versionId = event.detail.id;
    setActiveVersionId(versionId);
  }

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

    const options = {
      parentId: activeVersionId,
      name: newVersionName
    };
    const version = await createVersion(site, hubContext, options);

    console.log('created version', version.id);
    // this is janky but... it's a demo
    setNewVersionName('');
    setActiveVersionId();
    setTimeout(() => {
      setActiveVersionId(version.id);
    }, 500);
  }

  async function _updateVersion (versionId) {
    if (versionId) {
      // make it obvious that we updated the version
      const layout = cloneObject(site.data.values.layout);
      layout.sections[0].rows[0].cards[0].component.settings.markdown += `; Updated: ${formatDate()}`;
      site.data.values.layout = layout;

      await updateVersion(site, activeVersionResource, hubContext);
      console.log('updated version', versionId);

      // this is janky but... it's a demo
      setActiveVersionId();
      setTimeout(() => {
        setActiveVersionId(versionId);
      }, 10);
    }
  }

  async function _deleteVersion (versionId) {
    if (versionId) {
      await deleteVersion(site.item.id, versionId, site.item.owner, hubContext);
      setActiveVersionId();
    }
  }

  async function _publishVersion (versionId) {
    if (versionId) {
      await publishSiteVersion(site, activeVersionResource, hubContext);
      // set the activeVersion to undefined which means the published site
      setActiveVersionId();
    }
  }

  function formatDate(dateStamp = Date.now()) {
    const date = new Date(dateStamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  function renderLayoutCard(card, idx) {
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

  function renderHelp() {
    return <div className="help">
      <p>At left is a list of versions for the current site. The highlighted one is the currently "active" one - the one whose layout is shown below. The one with an asterisk is the one that is currently publishedl. Most of the versions have names that were randomly generated. But some may have been given a specific name (ie original, julianas special version).</p>
      <p>Click on a version to make it active.</p>
      <p>Click on the <strong>create new version</strong> button to create a new version based on the currently active version. This will add a section at the top of the layout to distinguish it from other versions.</p>
      <p>Click on the <strong>update version</strong> button to update the currently active version. This will add an updated date to the top section of the layout to distinguish it from other versions.</p>
      <p>Click on the <strong>delete version</strong> button to delete the currently active version.</p>
      <p>Click on the <strong>publish version</strong> button to publish the currently active version. This will update the version resource with the current site model and save the site.</p>
    </div>;
  }

  function renderVersionInfo(site, version) {
    if (!version) {
      version = {
        name: 'Published',
        updated: site?.item?.modified
      }
    }
    const versionName = getDisplayName(version);
    return (
      <div>
        <h2>{versionName}</h2>
        <div>updated: {formatDate(version.updated)}</div>
        {version.creator ? <div>creator: {version.creator}</div> : null}
      </div>
    );
  }

  function getDisplayName (version) {
    return version.name || formatDate(version.created);
  }

  // function renderVersionListItem(version, idx) {
  //   const isPublished = site.item.typeKeywords.includes(`hubSiteLayoutVersionPublished:${version.id}`);
  //   const isActive = version.id === activeVersionId;
  //   const versionName = getDisplayName(version);
    
  //   return (
  //     <calcite-pick-list-item
  //       class={isPublished ? 'published' : ''}
  //       description={`created by: ${version.creator}, last updated: ${formatDate(version.updated)}`}
  //       key={version.id}
  //       label={`${versionName}${isPublished ? ' (published)' : ''}`}
  //       selected={isActive ? true : undefined}
  //       value={version.id}>
  //       {/* <calcite-action slot="secondaryAction" text="Delete" onClick={_ => _deleteVersion(version.id)} /> */}
  //     </calcite-pick-list-item>
  //   );
  // }

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
        <div className="flex-row">
          <div className="left">
            <h2>Versions</h2>
            <arcgis-hub-versions
              activeVersionId={activeVersionId}
              context={{ requestOptions: { ...hubContext, portal: hubContext.authentication.portal }}}
              itemId={siteId}
              onarcgisHubVersionsVersionSelected={selectVersion}
              publishedVersionId={publishedVersionId}
            />
          </div>
          <div className="right">
            <label>Show help: <input type="checkbox" checked={shouldShowHelp} onChange={evt => setShouldShowHelp(evt.target.checked)} /></label>
            {shouldShowHelp ? renderHelp() : null}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="header">
          {renderVersionInfo(site, activeVersionResource)}
          <div className="toolbar">
            <input type="text" className="version-name" value={newVersionName} onChange={evt => setNewVersionName(evt.target.value)} />
            <button type="button" disabled={!isAuthenticated} onClick={_createVersion} title="Create a new version based on the currently active version. This will add a section at the top of the layout.">create new version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionId} onClick={_ => _updateVersion(activeVersionId)} title="Update the currently active version. This will add an updated date to the top section of the layout.">update version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionId} onClick={_ => _deleteVersion(activeVersionId)} title="Delete the currently active version.">delete version</button>
            <button type="button" disabled={!isAuthenticated || !activeVersionId} onClick={_ => _publishVersion(activeVersionId)} title="Publish the currently active version. This will update the version resource with the current site model and save the site.">publish version</button>
            {/* <button>update version</button> */}
          </div>
        </div>
        <div className="preview">
          {site?.data?.values?.layout?.sections.map((section, idx) => (
            <div className="section" key={idx}>
              {section.rows.map((row, idx) => (
                <div className="row" key={idx}>
                  {row.cards.map(renderLayoutCard)}
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
