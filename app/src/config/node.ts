import nodeLayer from 'app-node-layer';

const initClient = () => {
  const require = window.require;
  // window.require = null; // prevent accessing nodejs from page context

  if (require) {
    const client = nodeLayer(window.require);
    window.require = null;
    return client;
  }
};

export const nodeClient = initClient();
