import { controllers } from './controllers';

const clientInit = (config: AppDB.API.Config) => {
  return controllers(config);
};

export default clientInit;
