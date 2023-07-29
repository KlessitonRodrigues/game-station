export const preLoadImages = (urls: string[]) => {
  const div = document.createElement('div');
  div.className = 'PreloadImages';

  urls.forEach(url => {
    const preload = document.createElement('div');
    preload.style.position = 'absolute';
    preload.style.top = '0';
    preload.style.backgroundImage = url;
    preload.style.backgroundSize = '100% 100%';

    div.appendChild(preload);
  });
  document.body.appendChild(div);
};
