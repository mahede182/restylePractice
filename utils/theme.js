import { createBox, createText, createTheme, createRestyleComponent, createVariant } from '@shopify/restyle';

import { colors } from './variants/colors';
import { textVariants } from './variants/text-variants';
import { palette } from './variants/colors';
import { spacing } from './variants/spacing';
import { borderRadii } from './variants/borderRadii';

const theme = createTheme({
  colors: colors,
  textVariants: textVariants,
  spacing: spacing,
  borderRadii: borderRadii,
  breakpoints: {
    phone: 0,
    tablet: 768,
    mediumTablet: 834,
    largeTablet: 1024,
    extraLarge: 1200,
    tvOs: 2048,
  },
});

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    primaryCardText: palette.greenLight,
    secondaryCardBackground: palette.darkGray,
    secondaryCardText: palette.white,
    homeBackground: palette.blackLight
  },
};

export default theme;

// Export Box and Text Here
export const Box = createBox();
export const Text = createText();
export const Card = createRestyleComponent([
  spacing,
  createVariant({ themeKey: 'cardVariants' }),
]);