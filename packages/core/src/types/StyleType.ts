export type StyleType = {
  colors?: {
    primaryColor?: string,
    secondaryColor?: string,
    successColor?: string,
    accentColor?: string,
    backgroundColor?: string,
    fontColor?: string,
    warningColor?: string,
    errorColor?: string,
    infoColor?: string,
  },
  tokens?: {
    radius?: 'none' | 'sm' | 'md' | 'lg' | '|xl' | '2xl' | '3xl',
  },
  plugins?: {
  }
}