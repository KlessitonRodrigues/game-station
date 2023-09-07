import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import { nodeJS } from 'src/utils/electron/nodeJS';

import { BrowserTitle, Container, File, FileName, Files } from './styled';

export const BrowseFolders = (props: App.Props.BrowseFolders) => {
  const { path, active, onChange } = props;
  const onPressed = useGamepad();
  const [dir, setDir] = useState({ path, selected: 0 });
  const files = useMemo(() => (active ? nodeJS.listDir(dir.path) : []), [dir.path, active]);

  useEffect(() => {
    const { path, selected } = dir;
    onPressed('RightStickUp', () => selected > 0 && setDir({ ...dir, selected: selected - 1 }));
    onPressed('RightStickDown', () => {
      selected < files.length - 1 && setDir({ ...dir, selected: selected + 1 });
    });
    onPressed('RightStickDown', () => {
      const newPath = path + '/../';
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    });
    onPressed('RightStickDown', () => {
      const newPath = path + `/${files[selected]}/`;
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    });
    onPressed('RightStickDown', () => onChange && onChange(dir.path, files[selected]));
  }, [onPressed]);

  return (
    <Container>
      <BrowserTitle>{nodeJS.resolvePath(dir.path)}</BrowserTitle>
      <Files>
        {files.map(file => {
          const isDir = !file.includes('.');
          return (
            <File key={file} active={file === files[dir.selected]}>
              <Icons type={isDir ? 'folder' : 'file'} size={7} />
              <FileName>{file}</FileName>
            </File>
          );
        })}
      </Files>
    </Container>
  );
};
