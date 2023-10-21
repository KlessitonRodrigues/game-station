declare namespace App {
  namespace Utils {
    type BgColors =
      | 'indigo'
      | 'blue'
      | 'green'
      | 'deepPurple'
      | 'purple'
      | 'pink'
      | 'red'
      | 'blueAndPurple'
      | 'blueAndPink'
      | 'greenAndPink'
      | 'blueAndBrown'
      | 'purpleAndGreen';

    type ImageCache = {
      url: string;
      data: string;
    };

    type GamePageScreens = 'list' | 'grid';
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
