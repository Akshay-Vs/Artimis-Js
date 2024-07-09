type colorsType = {
  primaryColor?: string,
  secondaryColor?: string,
  successColor?: string,
  accentColor?: string,
  backgroundColor?: string,
  fontColor?: string,
  warningColor?: string,
  errorColor?: string,
  infoColor?: string,
}

export type StyleType = {
  theme?: {
    dark: colorsType,
    light: colorsType,
  },
  tokens?: {
    radius?: 'none' | 'sm' | 'md' | 'lg' | '|xl' | '2xl' | '3xl',
  },
  plugins?: {
  }
}