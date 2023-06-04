import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',



  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
  background: '#0ECDff',
};

const theme = createTheme({
  colors: {
    cartBackground: palette.background,
    mainBackground: palette.lightGray,
    mainForeground: palette.black,
    homeBackground: palette.darkGray,
    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.white,
    primaryCardText: palette.white,
    secondaryCardText: palette.black,
  },

  spacing: {
    s: 8,
    m: 16,
    md: 18,
    l: 24,
    xl: 40,
  },
  margin: {
    s: 10,
    m: 12,
    l: 14,
    xl: 16,
  },
  padding: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 70,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export default theme;

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    primaryCardText: palette.purpleDark,
    secondaryCardBackground: palette.darkGray,
    secondaryCardText: palette.white,
  },
};