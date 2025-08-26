import nodeHttps from 'https';

export const fetchImage = (require: NodeJS.Require) => async (url: string) => {
  try {
    const Https = require('https') as typeof nodeHttps;

    return await new Promise<Blob>(resolve => {
      Https.get(url, res => {
        const redirectUrl = res.headers.location;
        if (redirectUrl) return resolve(fetchImage(require)(redirectUrl));

        let imageBuffer = Buffer.alloc(0);

        res.on('data', chunk => {
          imageBuffer = Buffer.concat([imageBuffer, chunk]);
        });

        res.on('end', () => {
          const type = res.headers['content-type'];
          const image = new Blob([imageBuffer], { type });
          resolve(image);
        });
      });
    });
  } catch (err: any) {
    throw new Error('FailedToFetchImageData');
  }
};

export default fetchImage;
