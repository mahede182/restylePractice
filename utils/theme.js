import { createBox, createText, createTheme } from '@shopify/restyle';

import { colors } from './variants/colors';
import { textVariants } from './variants/text-variants';
import { palette } from './variants/colors';
import { spacing } from './variants/spacing';
import { borderRadii } from './variants/borderRadii';

const theme = createTheme({
  colors: colors,
  textVariants: textVariants,
  spacing: spacing,
  borderRadii: borderRadii
});

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

export default theme;

// Export Box and Text Here
export const Box = createBox();
export const Text = createText();
