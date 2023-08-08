import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import PageContainer from 'src/UI/base/PageContainer';
import Panel from 'src/UI/base/Panel';
import useGamepad from 'src/hooks/useGamepad';

const SettingsPage = () => {
  const [pressed] = useGamepad();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (pressed.includes('ArrowUp')) active > 0 && setActive(active - 1);
    if (pressed.includes('ArrowDown')) active < 1 && setActive(active + 1);
  }, [pressed]);

  return (
    <PageContainer>
      <SlideUp>
        <Panel active={active === 0} title="Start up time" value="">
          <div>Settings</div>
        </Panel>
      </SlideUp>
    </PageContainer>
  );
};

export default SettingsPage;
