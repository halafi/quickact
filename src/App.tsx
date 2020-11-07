import * as React from 'react';
import { render } from 'react-dom';
// @ts-ignore
// import { themeDefault } from './records/Theme';
// import type { Theme } from './records/Theme';
import Root from './scenes/Root';

const container = document.getElementById('container');

// type GlobalStyleProps = {
//   theme: Theme;
// };

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${({ theme }: GlobalStyleProps) => theme.colors.text};
//     font-family: 'Baloo 2', cursive;
//   }
// `;

if (container) {
  render(
    <React.StrictMode>
      {/* <ThemeProvider theme={themeDefault}> */}
      <>
        {/* <Normalize /> */}
        {/* <GlobalStyle /> */}
        <Root />
      </>
      {/* </ThemeProvider> */}
    </React.StrictMode>,
    container,
  );
}
