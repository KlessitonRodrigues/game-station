declare namespace App {
  namespace Utils {
    type GameListMode = 'list' | 'grid';

    type GradientBgOptions =
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
  }
}
