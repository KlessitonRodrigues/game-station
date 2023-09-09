import { useEffect, useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';
import ThemeSettingsForm from 'src/UI/forms/Theme';
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
      <ThemeSettingsForm />
    </PageContainer>
  );
};

export default ThemePage;
