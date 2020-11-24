import * as React from 'react';
import { render } from 'react-dom';
import Root from './scenes/Root';

const container = document.getElementById('container');

if (container) {
  render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    container,
  );
}
