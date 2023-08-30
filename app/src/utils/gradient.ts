import { materialColors as mc } from 'src/styles/lib/palettes';

export const bgGradientList: Record<App.Utils.GradientBgOptions, string> = {
  indigo: `linear-gradient(150deg, ${mc.blue['a700']}, ${mc.black} 80%)`,
  blue: `linear-gradient(150deg, ${mc.lightBlue['a700']}, ${mc.black} 80%)`,
  green: `linear-gradient(150deg, ${mc.lightGreen['a700']}, ${mc.black} 80%)`,
  deepPurple: `linear-gradient(150deg, ${mc.deepPurple['a700']}, ${mc.black} 80%)`,
  purple: `linear-gradient(150deg, ${mc.purple['a700']}, ${mc.black} 80%)`,
  pink: `linear-gradient(150deg, ${mc.pink['a700']}, ${mc.black} 80%)`,
  red: `linear-gradient(150deg, ${mc.red['700']}, ${mc.black} 80%)`,
  blueAndPurple: `linear-gradient(150deg, ${mc.cyan['a700']}, ${mc.purple['600']} 70%)`,
  blueAndPink: `linear-gradient(150deg, ${mc.cyan['a700']}, ${mc.pink['a700']} 80%)`,
  greenAndPink: `linear-gradient(150deg, ${mc.lightGreen['a700']}, ${mc.pink['900']} 80%)`,
  blueAndBrown: `linear-gradient(150deg, ${mc.lightBlue['a700']}, ${mc.brown['700']} 75%)`,
  purpleAndGreen: `linear-gradient(150deg, ${mc.deepPurple['a700']}, ${mc.lightGreen['600']} 80%)`,
};
