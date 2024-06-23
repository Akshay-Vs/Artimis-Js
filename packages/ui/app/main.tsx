/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArtimisCore } from '@artimisjs/core';
import App from './App.tsx';
import '../tailwind.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArtimisCore dataProvider={{}}>
      <App />
    </ArtimisCore>
  </React.StrictMode>
);
