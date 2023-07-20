import { RenderFolders } from './services/renderFolders';
import { RenderImages } from './services/renderImages';

export const BrowserResources = (props: BrowserResourcesProps) => {
  const { type } = props;

  if (type === 'cover' || type === 'background') return <RenderImages {...props} />;
  if (type === 'folder') return <RenderFolders {...props} />;
};
