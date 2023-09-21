declare namespace App {
  namespace Utils {
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
