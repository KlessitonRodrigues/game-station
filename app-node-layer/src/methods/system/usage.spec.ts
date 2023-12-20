import systemUsage from './usage';

describe('When get system usage', () => {
  test('Should return page as string', async () => {
    const data = await systemUsage(require)();
  });
});
