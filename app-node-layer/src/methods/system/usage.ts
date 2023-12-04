import nodeOS from 'os';
import { bytesToMegabytes } from '../../utils/system';

export const systemUsage = (require: NodeJS.Require) => async () => {
  try {
    const os = require('os') as typeof nodeOS;

    const platform = os.platform();
    const totalMemory = bytesToMegabytes(os.totalmem());
    const usageMemory = totalMemory - bytesToMegabytes(os.freemem());
    const cpuName = os.cpus()[0].model;

    const cores = os.cpus().map((cpu, i) => {
      // const { idle, sys, user, nice } = cpu.times;
      // const time = sys + user + nice + idle;
      // const usage = ((time - idle) / time) * 100;
      return {
        index: i,
        clock: cpu.speed,
      };
    });

    return {
      platform,
      memory: {
        usage: usageMemory,
        total: totalMemory,
      },
      cpu: {
        name: cpuName,
        cores,
      },
    };
  } catch (err: any) {
    throw new Error('FailedToFetchHTMLPage');
  }
};

export default systemUsage;

// const coreTime = core.times.user + core.times.nice + core.times.sys + core.times.idle;
// const coreUsage = ((coreTime - core.times.idle) / coreTime) * 100;
