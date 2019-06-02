import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import ThemeDefault from './records/Theme';
import Root from './scenes/Root';

const container = document.getElementById('container');

if (container) {
  render(
    <ThemeProvider theme={ThemeDefault}>
      <>
        <Normalize />
        <Root />
      </>
    </ThemeProvider>,
    container,
  );
}
