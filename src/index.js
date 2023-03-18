import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

// import the app component
import App from './app';

let container = document.getElementById('app');

let root = ReactDOMClient.createRoot(container);

root.render( <App />);
