import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import { nodeJS } from 'src/utils/nodeJS';

import { BrowserTitle, Container, File, Files } from './styled';

export const BrowseFolders = (props: BrowseFoldersProps) => {
  const { path } = props;
  const [pressed] = useGamepad();
  const [dir, setDir] = useState({ path, selected: 0 });
  const files = useMemo(() => nodeJS.listDir(dir.path), [dir.path]);

  useEffect(() => {
    const { path, selected } = dir;
    if (pressed.includes('ArrowUp') && selected > 0) {
      setDir({ ...dir, selected: selected - 1 });
    }
    if (pressed.includes('ArrowDown') && selected < files.length - 1) {
      setDir({ ...dir, selected: selected + 1 });
    }
    if (pressed.includes('ArrowLeft')) {
      const newPath = path + '/../';
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    }
    if (pressed.includes('ArrowRight')) {
      const newPath = path + `/${files[selected]}/`;
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    }
  }, [pressed]);

  return (
    <Container>
      <BrowserTitle>{nodeJS.resolvePath(dir.path)}</BrowserTitle>
      <Files>
        {files.map(file => {
          const isDir = !file.includes('.');
          return (
            <File active={file === files[dir.selected]}>
              <Icons type={isDir ? 'folder' : 'file'} />
              {file}
            </File>
          );
        })}
      </Files>
    </Container>
  );
};
