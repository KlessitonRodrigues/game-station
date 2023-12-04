import fetchPage from './fetchPage';

describe('When fetching HTML page', () => {
  test('Should return page as string', async () => {
    const page = await fetchPage(require)('http://www.google.com/');
    expect(page.startsWith('<')).toBeTruthy();
  });

  test('Should show error message for invalid url', async () => {
    try {
      await fetchPage(require)('http://www.123.123');
    } catch (err) {
      expect(err.message).toBe('FailedToFetchHTMLPage');
    }
  });
});
