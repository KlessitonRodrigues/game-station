import nodeLayer from 'app-node-layer';

const initClient = () => {
  const require = window.require;
  // window.require = null; // prevent accessing nodejs from page context
  if (require) {
    console.log('initing nodeJS layer');
    const client = nodeLayer(window.require);
    // window.require = null;
    return client;
  }
};

export const nodeClient = initClient();
