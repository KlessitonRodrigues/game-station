import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import { nodeJS } from 'src/utils/nodeJS';

import { BrowserTitle, Container, File, FileName, Files } from './styled';

export const BrowseFolders = (props: Props.BrowseFolders) => {
  const { path, active, onChange } = props;
  const [pressed] = useGamepad();
  const [dir, setDir] = useState({ path, selected: 0 });
  const files = useMemo(() => (active ? nodeJS.listDir(dir.path) : []), [dir.path, active]);

  useEffect(() => {
    const { path, selected } = dir;
    if (pressed.includes('RightStickUp') && selected > 0) {
      setDir({ ...dir, selected: selected - 1 });
    }
    if (pressed.includes('RightStickDown') && selected < files.length - 1) {
      setDir({ ...dir, selected: selected + 1 });
    }
    if (pressed.includes('RightStickLeft')) {
      const newPath = path + '/../';
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    }
    if (pressed.includes('RightStickRight')) {
      const newPath = path + `/${files[selected]}/`;
      setDir({ selected: 0, path: nodeJS.resolvePath(newPath) });
    }
    if (pressed.includes('ButtonA')) {
      onChange && onChange(dir.path, files[selected]);
    }
  }, [pressed]);

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
