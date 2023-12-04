import listFiles from './listFiles';

describe('When listing files', () => {
  test('Should list files and folders', () => {
    const dirs = listFiles(require)('./');
    expect(dirs.folders.includes('node_modules')).toBeTruthy();
    expect(dirs.files.includes('package.json')).toBeTruthy();
  });

  test('Should show error message for invalid path', () => {
    try {
      listFiles(require)('./abc');
    } catch (err) {
      expect(err.message).toBe('FailedToListFiles');
    }
  });
});
