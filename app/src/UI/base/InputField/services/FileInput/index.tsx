import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { nodeJS } from 'src/utils/electron/nodeJS';

import { checkFileName } from './services/fileName';
import { Container, Dir, DirName, Directories, Path } from './styled';

export const FileInputModal = (props: App.Props.InputField) => {
  const { active, onChange, onClose } = props;

  const onPressed = useGamepad();
  const { focus, setFocus } = useScreenState();
  const [path, setPath] = useState('/');
  const [dirsNames, setDirNames] = useState<string[]>([]);

  useEffect(() => {
    if (active) {
      onPressed('ArrowUp', () => setFocus(focus - 1));
      onPressed('ArrowDown', () => setFocus(focus + 1));
      onPressed('ArrowRight', () => {
        setPath(nodeJS.resolvePath(path + '/' + dirsNames[focus]));
        setFocus(0);
      });
      onPressed('ArrowLeft', () => {
        setPath(nodeJS.resolvePath(path + '/..'));
        setFocus(0);
      });
      onPressed('ButtonA', () => {
        onChange(path + '/' + dirsNames[focus]);
        onClose();
      });
    }
  }, [onPressed]);

  useEffect(() => {
    const dirPath = nodeJS.resolvePath(path);
    const dirSubPaths = nodeJS.listDir(dirPath);
    setDirNames(dirSubPaths);
  }, [path]);

  const dirList = useMemo(() => {
    return dirsNames.map((name, i) => {
      const { isFile, isExe } = checkFileName(name);
      return (
        <Dir key={name + i} active={focus === i}>
          <Icons type={isFile ? 'file' : 'folder'} />
          <DirName>{name}</DirName>
        </Dir>
      );
    });
  }, [dirsNames, focus]);

  return (
    <Container>
      <Path>{path}</Path>
      <Directories>{dirList}</Directories>
    </Container>
  );
};
