import { blockSizes, colors, gapSizes, textSizes } from './base'

type buttonVariants = {
  default: colors;
  secondary: colors;
  destructive: colors;
  outline: colors;
  ghost: colors;
  link: colors;
}

type rootStyle = {
  background: string;
  foreground: string;
}

type footerStyle = {
  background: string;
  foreground: string;
}

export type StyleConfig = {
  root: {
    light: rootStyle;
    dark: rootStyle;
  };
  footer: {
    light: footerStyle;
    dark: footerStyle;
  };
  button: {
    dark: buttonVariants;
    light: buttonVariants;
  },
  flex: {
    sizes: blockSizes;
    gap: gapSizes;
  },
  row: {
    sizes: blockSizes;
    gap: gapSizes;

  },
  column: {
    sizes: blockSizes;
    gap: gapSizes;
  },
  text: {
    sizes: textSizes
  }
}