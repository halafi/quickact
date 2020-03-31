import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const SIZES = {
  DESKTOP: 1220,
  BIG_TABLET: 1112,
  TABLET: 768,
  BIG_MOBILE: 600, // or 568
  MIDDLE_MOBILE: 414,
  SMALL_MOBILE: 360,
};

export const themeDefault = {
  fonts: {
    body: 'Baloo 2, cursive',
    heading: 'inherit',
    // monospace: 'Menlo, monospace',
  },
  breakpoints: [
    `${SIZES.SMALL_MOBILE}px`,
    `${SIZES.MIDDLE_MOBILE}px`,
    `${SIZES.BIG_MOBILE}px`,
    `${SIZES.TABLET}px`,
    `${SIZES.DESKTOP}px`,
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  colors: {
    text: '#000000',
    primary: '#000000',
    secondary: '#ffffff',
  },
  variants: {
    container: {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '1220px',
    },
  },
};

export type Theme = typeof themeDefault;

export const styled = baseStyled as ThemedStyledInterface<Theme>;
