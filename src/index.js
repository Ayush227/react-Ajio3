import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
import App12 from './App12';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App1 />
    <App2 />
    <App3 />
    <App4 />
    <App6 />
    <App5 />
    <App7 />
    <App8 />
    <App9 />
    <App10 />
    <App11 />
    <App12 />
  </StrictMode>
);
