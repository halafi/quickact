import * as React from 'react';
import { hydrate } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { themeDefault } from './records/Theme';
import Routes from './Routes';

const container = document.getElementById('root');

if (container) {
  hydrate(
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>,
    container,
  );
}
