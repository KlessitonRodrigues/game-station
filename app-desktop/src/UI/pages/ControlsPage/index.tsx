import GamepadIcon from 'src/UI/base/Gamepad';
import PageContainer from 'src/UI/base/PageContainer';
import useGamepad from 'src/hooks/useGamepad';

const ControlsPage = () => {
  const [pressed] = useGamepad();

  return (
    <PageContainer>
      <GamepadIcon pressed={pressed} />
    </PageContainer>
  );
};

export default ControlsPage;
