import runCommand from './run';

describe('When run a command', () => {
  test('Should return the command result', () => {
    const result = runCommand(require)('node --version');
    expect(result.startsWith('v')).toBeTruthy();
  });
});
