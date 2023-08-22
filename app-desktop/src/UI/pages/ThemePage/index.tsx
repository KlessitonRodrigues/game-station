import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import ColorPicker from 'src/UI/base/ColorPicker';
import PageContainer from 'src/UI/base/PageContainer';
import Panel from 'src/UI/base/Panel';
import useGamepad from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';

const ThemePage = () => {
  const [global, setGlobal] = useGlobalContext();
  const [pressed] = useGamepad();
  const [active, setActive] = useState(0);
  const isActive = (n: number) => n === active;

  useEffect(() => {
    if (pressed.includes('ArrowUp')) active > 0 && setActive(active - 1);
    if (pressed.includes('ArrowDown')) active < 1 && setActive(active + 1);
  }, [pressed]);

  return (
    <PageContainer>
      <SlideUp>
        <Panel active={isActive(0)} title="Background Color" value={global.gradientBg}>
          <ColorPicker
            active={isActive(0)}
            value={global.gradientBg}
            onChange={bg => setGlobal({ ...global, gradientBg: bg })}
          />
        </Panel>
      </SlideUp>
    </PageContainer>
  );
};

export default ThemePage;
