import fetchImage from './fetchImage';

describe('When fetching images', () => {
  test('Should fetch image data', async () => {
    const url = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png';
    const res = await fetchImage(require)(url);
    expect(res.size).toBeTruthy();
  }, 10000);

  test('Should show error message for invalid url', async () => {
    try {
      await fetchImage(require)('http://www.123.123');
    } catch (err) {
      expect(err.message).toBe('FailedToFetchImageData');
    }
  });
});
