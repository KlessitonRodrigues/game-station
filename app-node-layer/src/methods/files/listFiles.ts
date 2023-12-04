import nodeFs from 'fs';

const listFiles = (require: NodeJS.Require) => (path: string) => {
  try {
    const fs = require('fs') as typeof nodeFs;

    const childPaths = fs.readdirSync(path);
    const folders: string[] = [];
    const files: string[] = [];

    childPaths.forEach(child => {
      if (child.includes('.')) files.push(child);
      else folders.push(child);
    });

    return { folders, files };
  } catch (err: any) {
    throw new Error('FailedToListFiles');
  }
};

export default listFiles;
