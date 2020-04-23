import React from 'react';
import stream from 'stream';
import {
  StyleSheetManager,
  ServerStyleSheet,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { Normalize } from 'styled-normalize';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { Theme } from '../../../client/records/Theme';
import { themeDefault } from '../../../client/records/Theme';
import Routes from '../../../client/Routes';
import SEO from './SEO';

type GlobalStyleProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }: GlobalStyleProps) => theme.colors.text};
    font-family: 'Baloo 2', cursive;
  }
`;

const template = (url: string): NodeJS.ReadableStream => {
  const sheet = new ServerStyleSheet();

  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={themeDefault}>
        <Normalize />
        <GlobalStyle />
        <StaticRouter location={url} context={{}}>
          <Routes />
        </StaticRouter>
      </ThemeProvider>
    </StyleSheetManager>,
  );

  const pass = new stream.PassThrough();
  pass.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link
          href="https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
  `);
  // not great method, but getStyleElement seems broken
  const htmlStream = sheet.interleaveWithNodeStream(
    renderToNodeStream(<SEO title="Hello world!" />),
  );

  const appendTransform = new stream.Transform({
    transform(chunk, _, callback) {
      callback(null, chunk);
    },
    flush(callback) {
      this.push(`
        </head>
        <body>
          <div id="root">${root}</div>
          <script src="bundle.js"></script>
        </body>
        </html>
      `);
      callback();
    },
  });

  return htmlStream.pipe(pass).pipe(appendTransform);
};

export default template;
