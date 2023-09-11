import { ImageCompress } from './imageCompress';

export const fetchImageData = (url: string) => {
  return new Promise<string>((resolve, reject) => {
    fetch(url)
      .then(async res => {
        const img = await res.blob();
        const compressedImg = await ImageCompress(img);
        const file = new FileReader();
        file.readAsDataURL(compressedImg);
        return await new Promise(r => (file.onload = () => r(file.result)));
      })
      .then(resolve)
      .catch(reject);
  });
};

export const imageCache = async (url: string) => {
  const storeName = 'image_cache';
  const imgStore = localStorage.getItem(storeName) || '[]';
  const cachedImages = JSON.parse(imgStore) as App.Utils.ImageCache[];
  const img = cachedImages.find(img => img.url === url);
  if (img) return img.data;

  const imgData = await fetchImageData(url);
  cachedImages.push({ url, data: imgData });
  localStorage.setItem(storeName, JSON.stringify(cachedImages));
  return imgData;
};

export const getGamesImageCache = async (games: AppDB.Models.GameInfo[]) => {
  for (const game of games) {
    game.background = await imageCache(game.background);
    game.cover = await imageCache(game.cover);
  }
  return games;
};
