import { useEffect, useState } from 'react';
import ColorPicker from 'src/UI/base/ColorPicker';
import { Panel, PanelTitle } from 'src/UI/base/Styles';
import PageContainer from 'src/UI/components/PageContainer';
import useGamepad from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';

const ThemePage = () => {
  const [pressed] = useGamepad();
  const [global, setGlobal] = useGlobalContext();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (pressed.includes('ArrowUp')) active > 0 && setActive(active - 1);
    if (pressed.includes('ArrowDown')) active < 1 && setActive(active + 1);
  }, [pressed]);

  return (
    <PageContainer>
      <Panel active={active === 0}>
        <PanelTitle>Background</PanelTitle>
        <ColorPicker
          active={active === 0}
          value={global.gradientBg}
          onChange={bg => setGlobal({ ...global, gradientBg: bg })}
        />
      </Panel>
    </PageContainer>
  );
};

export default ThemePage;
