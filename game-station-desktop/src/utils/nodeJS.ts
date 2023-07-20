const NodeJS = () => {
  const require = window.require;
  window.require = null; // prevent accessing nodejs from page context

  return {
    isActive: !!require,

    resolvePath: (dirPath: string) => {
      const Path = require('path');
      return Path.resolve(dirPath);
    },

    fetchHTML: (url: string) => {
      return new Promise<string>((resolve, reject) => {
        try {
          const Http = require('http');
          Http.get(url, (res: any) => {
            let rawHtml = '';
            res.on('data', (chunk: any) => (rawHtml += chunk));
            res.on('end', () => resolve(rawHtml));
          });
        } catch (e) {
          reject(e);
        }
      });
    },

    exec: (command: string) => {
      try {
        const Process = require('child_process');
        return Process.execSync(command).toString();
      } catch (e) {
        console.log(e);
        return '';
      }
    },

    listDir: (dir: string): string[] => {
      try {
        const Fs = require('fs');
        const Path = require('path');
        const files = Fs.readdirSync(Path.resolve(dir));
        return files.filter((file: string) => !file.startsWith('.'));
      } catch (e) {
        console.error(e);
        return [''];
      }
    },
  };
};

export const nodeJS = NodeJS();
