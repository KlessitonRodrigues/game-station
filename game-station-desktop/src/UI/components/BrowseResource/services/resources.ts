import { getBingImages } from 'src/utils/googleImages';
import { listFolders } from 'src/utils/nodeJS';

export const getImageUrls = (query: string, type: 'bg' | 'cover') => {
  if (type === 'cover') return getBingImages(`${query} cover`);
  if (type === 'bg') return getBingImages(`${query} background full hd`);
};

export const getFolderList = (query: string) => {
  return listFolders(query);
};
