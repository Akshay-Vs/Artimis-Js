type colors = {
  background: string;
  foreground: string;
  hoverBackground: string;
  hoverForeground: string;
}

type blockSizes = {
  default: {
    height: string;
    width: string;
  }
  sm: {
    height: string;
    width: string;
  };
  md: {
    height: string;
    width: string;
  };
  lg: {
    height: string;
    width: string;
  };
  '1x': {
    height: string;
    width: string;
  };
  '2x': {
    height: string;
    width: string;
  };
  '3x': {
    height: string;
    width: string;
  };
  '4x': {
    height: string;
    width: string;
  };
  '5x': {
    height: string;
    width: string;
  };
  '6x': {
    height: string;
    width: string;
  };
  '7x': {
    height: string;
    width: string;
  };
  '8x': {
    height: string;
    width: string;
  };
  '9x': {
    height: string;
    width: string;
  };
  '10x': {
    height: string;
    width: string;
  };
}

type textSizes = {
  default: string;
  sm: string;
  md: string;
  lg: string;
  '1x': string;
  '2x': string;
  '3x': string;
  '4x': string
  '5x': string;
  '6x': string;
  '7x': string;
  '8x': string;
  '9x': string;
  '10x': string;
}

type gapSizes = {
  default: string;
  sm: string;
  md: string;
  lg: string;
  '1x': string;
  '2x': string;
  '3x': string;
  '4x': string
  '5x': string;
  '6x': string;
  '7x': string;
  '8x': string;
  '9x': string;
  '10x': string;
}

type radius = {
  default: string | string[]
}

export type {
  colors,
  blockSizes,
  radius,
  gapSizes
}