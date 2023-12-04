import runCommand from './methods/cmd/run';
import listFiles from './methods/files/listFiles';
import fetchPage from './methods/http/fetchPage';
import systemUsage from './methods/system/usage';

const init = (require: NodeRequire) => {
  return {
    file: {
      list: listFiles(require),
    },
    http: {
      page: fetchPage(require),
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
