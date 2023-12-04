import nodeProcess from 'child_process';

const runCommand = (require: NodeJS.Require) => (path: string) => {
  try {
    const process = require('child_process') as typeof nodeProcess;
    return process.execSync(path).toString();
  } catch (err) {
    console.log(err);
    throw new Error('FailedToStartAppFile');
  }
};

export default runCommand;
