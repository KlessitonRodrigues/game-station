import { controllers } from './controllers';

const clientInit = (config: LocalDB.Config) => {
  return controllers(config);
};

export default clientInit;
