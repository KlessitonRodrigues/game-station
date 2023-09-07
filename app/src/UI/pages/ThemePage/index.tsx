import { useEffect, useState } from 'react';
import ColorPicker from 'src/UI/base/ColorPicker';
import PageContainer from 'src/UI/base/PageContainer';
import Panel from 'src/UI/base/Panel';
import useGamepad from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';

const ThemePage = () => {
  const [global, setGlobal] = useGlobalContext();
  const onPressed = useGamepad();
  const [active, setActive] = useState(0);
  const isActive = (n: number) => n === active;

  useEffect(() => {
    onPressed('ArrowUp', () => active > 0 && setActive(active - 1));
    onPressed('ArrowUp', () => active < 1 && setActive(active + 1));
  }, [onPressed]);

  return (
    <PageContainer>
      <Panel active={isActive(0)} title="Background Color" value={global.gradientBg}>
        <ColorPicker
          active={isActive(0)}
          value={global.gradientBg}
          onChange={bg => setGlobal({ ...global, gradientBg: bg })}
        />
      </Panel>
    </PageContainer>
  );
};

export default ThemePage;
