import nodeLayer from 'app-node-layer';

export const nodeClient = () => {
  const require = window.require;
  return nodeLayer(require);
};
