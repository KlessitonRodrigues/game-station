import nodeHttp from 'http';

export const fetchPage = (require: NodeJS.Require) => async (url: string) => {
  try {
    const Http = require('http') as typeof nodeHttp;

    return await new Promise<string>(resolve => {
      Http.get(url, res => {
        let rawHtml = '';
        res.on('data', chunk => (rawHtml += chunk));
        res.on('end', () => resolve(rawHtml));
      });
    });
  } catch (err: any) {
    throw new Error('FailedToFetchHTMLPage');
  }
};

export default fetchPage;
