import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserSession } from '@esri/arcgis-rest-auth';
import { LOCAL_STORAGE_KEY, PORTAL_URL } from './environment';
import hubComponentsPackageInfo from '@esri/hub-components/package.json';
import { defineCustomElements } from "@esri/hub-components/dist/loader";

// CDN hosted assets
defineCustomElements(window, { resourcesUrl: `https://hubcdn.arcgis.com/@esri/hub-components/${hubComponentsPackageInfo.version}/dist/hub-components/` });

const session = new UserSession({
  portal: PORTAL_URL,
});
let initialContext = { authentication: session };

// if we have a context in localStorage, we will use that as the initial context
const json = localStorage.getItem(LOCAL_STORAGE_KEY);
if (json) {
  const authentication = UserSession.deserialize(json);
  initialContext = { authentication };
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App initialContext={initialContext} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
