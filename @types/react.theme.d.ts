type Theme = {
  size: (n: number) => string;
  colors: {
    main: string;
    mainBg: string;
    bg1: string;
    bg2: string;
    bg3: string;
    bg4: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    gray: string;
    yellow: string;
    red: string;
    blue: string;
    green: string;
    white: string;
    black: string;
  };
  radius: {
    verySmall: string;
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  fontSize: {
    body: string;
    label: string;
    small: string;
    verySmall: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  shadow?: {
    low: string;
    medium: string;
    high: string;
    mediumGray: string;
    mediumLeft: string;
    lowRight: string;
  };
  devices?: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptopS: string;
    laptopM: string;
    laptopL: string;
    desktopS: string;
    desktopM: string;
    desktopL: string;
  };
};
