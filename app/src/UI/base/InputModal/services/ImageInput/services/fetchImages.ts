import { nodeJS } from 'src/utils/electron/nodeJS';

export const fetchImages = async (search: string) => {
  const searchQuery = `${search.toLowerCase()}`;
  return await fetchUrls(searchQuery);
};

const fetchUrls = async (search: string) => {
  const query = search.split(' ').join('+');
  const page = await nodeJS.fetchHTML(`http://www.bing.com/images/search?q=${query}`);
  const imgData = page.replace(/&quot;/g, '"').match(/"murl":".*?"/gm);
  const imgSource = imgData.join(',').match(/"https:\/\/.*?"/gm);
  const imgUrl = imgSource.map(url => url.replace(/\"/g, ''));
  return imgUrl;
};
