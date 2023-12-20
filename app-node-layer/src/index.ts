import runCommand from './methods/cmd/run';
import listFiles from './methods/files/listFiles';
import fetchImage from './methods/http/fetchImage';
import fetchPage from './methods/http/fetchPage';
import systemUsage from './methods/system/usage';

const init = (require: NodeRequire) => {
  return {
    file: {
      list: listFiles(require),
    },
    http: {
      page: fetchPage(require),
      image: fetchImage(require),
    },
    cmd: {
      run: runCommand(require),
    },
    sytem: {
      usage: systemUsage(require),
    },
  };
};

export default init;
