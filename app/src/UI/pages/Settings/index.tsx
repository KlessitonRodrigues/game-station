import { useEffect, useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';
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
      <div>Settings</div>
    </PageContainer>
  );
};

export default SettingsPage;
