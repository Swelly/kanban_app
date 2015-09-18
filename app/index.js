'use-strict'
import './style/master.scss';

import React from 'react';
import App from './components/App.jsx';

main();

function main() {
  let app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
}