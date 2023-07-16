import { controllers } from './controllers';

const clientInit = (config: DBConfig) => {
  return controllers(config);
};

export default clientInit;
