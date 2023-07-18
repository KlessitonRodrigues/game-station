import { getBingImages } from 'src/utils/googleImages';
import { listFolders } from 'src/utils/nodeJS';

export const getImageUrls = (query: string, sufix: string) => {
  return getBingImages(`${query} ${sufix}`);
};

export const getFolderList = (query: string) => {
  return listFolders(query);
};
