import { useEffect, useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';
import Panel from 'src/UI/base/Panel';
import useGamepad from 'src/hooks/useGamepad';

const SettingsPage = () => {
  const onPressed = useGamepad();
  const [active, setActive] = useState(0);

  useEffect(() => {
    onPressed('ArrowUp', () => active > 0 && setActive(active - 1));
    onPressed('ArrowDown', () => active < 1 && setActive(active + 1));
  }, [onPressed]);

  return (
    <PageContainer>
      <Panel active={active === 0} title="Start up time" value="">
        <div>Settings</div>
      </Panel>
    </PageContainer>
  );
};

export default SettingsPage;
