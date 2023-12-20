import nodeHttp from 'http';

export const fetchImage = (require: NodeJS.Require) => async (url: string) => {
  try {
    const Http = require('http') as typeof nodeHttp;

    return await new Promise<Buffer>(resolve => {
      Http.get(url, res => {
        let imageBuffer = Buffer.alloc(0);
        res.on('data', chunk => (imageBuffer = Buffer.concat([imageBuffer, chunk])));
        res.on('end', () => resolve(imageBuffer));
      });
    });
  } catch (err: any) {
    throw new Error('FailedToFetchImageData');
  }
};

export default fetchImage;
