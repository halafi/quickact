// import baseStyled, { ThemedStyledInterface } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SIZES = {
  DESKTOP: 1220,
  BIG_TABLET: 1112,
  TABLET: 768,
  BIG_MOBILE: 600, // or 568
  MIDDLE_MOBILE: 414,
  SMALL_MOBILE: 360,
};

export const theme = {
  // text: '#000000',
  primary: '#000000',
  secondary: '#ffffff',
};

type Theme = {
  [key: string]: string;
};

type Themes = {
  [key: string]: Theme;
};

type MappedTheme = {
  [key: string]: string | null;
};

export const mapTheme = (variables: Theme): MappedTheme => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
  };
};
