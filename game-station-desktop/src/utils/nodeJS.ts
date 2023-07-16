const fs = window.require('fs');
const process = window.require('child_process');
const http = window.require('http');

export const listFolders = (path: string) => {
  return fs.readdirSync(path);
};

export const execCommand = (command: string) => {
  try {
    return process.execSync(command).toString();
  } catch (e) {
    console.log(e);
  }
};

export const getPageContent = (url: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      http.get(url, (res: any) => {
        let rawHtml = '';
        res.on('data', (chunk: any) => {
          rawHtml += chunk;
        });
        res.on('end', () => {
          resolve(rawHtml);
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};
