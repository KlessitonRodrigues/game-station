import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import GamepadIcon from 'src/UI/base/Gamepad';
import { Panel, PanelTitle } from 'src/UI/base/Styles';
import PageContainer from 'src/UI/components/PageContainer';
import useGamepad from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';

const SettingsPage = () => {
  const [pressed] = useGamepad();
  const [global, setGlobal] = useGlobalContext();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (pressed.includes('ArrowUp')) active > 0 && setActive(active - 1);
    if (pressed.includes('ArrowDown')) active < 1 && setActive(active + 1);
  }, [pressed]);

  return (
    <PageContainer>
      <SlideUp>
        <GamepadIcon pressed={pressed} />
        <Panel active={active === 0}>
          <PanelTitle>Start Up</PanelTitle>
        </Panel>
      </SlideUp>
    </PageContainer>
  );
};

export default SettingsPage;
