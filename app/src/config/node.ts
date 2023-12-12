import nodeLayer from 'app-node-layer';

const initClient = () => {
  console.log(window.require);

  const require = window.require;
  // window.require = null; // prevent accessing nodejs from page context

  if (!require) throw new Error('NodeNotAvailable');

  const client = nodeLayer(window.require);
  window.require = null;

  return client;
};

export const nodeClient = initClient();
