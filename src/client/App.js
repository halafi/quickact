import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// @ts-ignore
import { Normalize } from 'styled-normalize';
import ThemeDefault from './records/Theme';
import Root from './scenes/Root';
const container = document.getElementById('container');
const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
if (container) {
    render(React.createElement(ThemeProvider, { theme: ThemeDefault },
        React.createElement(React.Fragment, null,
            React.createElement(Normalize, null),
            React.createElement(GlobalStyle, null),
            React.createElement(Root, null))), container);
}
//# sourceMappingURL=App.js.map