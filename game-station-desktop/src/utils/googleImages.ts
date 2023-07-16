import { getPageContent } from './nodeJS';

export const getBingImages = async (search: string) => {
  const query = search.split(' ').join('+');
  const page = await getPageContent(`http://www.bing.com/images/search?q=${query}`);
  const imagesInfo = page.replace(/&quot;/g, '"').match(/"murl":".*?"/gm);
  const imagesSrc = imagesInfo.join(',').match(/"https:\/\/.*?"/gm);
  const imagesUrl = imagesSrc.map(url => url.replace(/\"/g, ''));
  return imagesUrl;
};

// Google
// http://www.google.com/search?q=${query}&tbm=isch&tbs=isz:l

// Bing
// http://www.bing.com/images/search?q=${query}
