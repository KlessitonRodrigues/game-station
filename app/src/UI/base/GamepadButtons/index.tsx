import { useEffect, useMemo } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { RoundedIcon } from './services/Icons';
import { Button, ButtonLabel, Container } from './styled';

const GamepadButtons = (props: App.Props.GamepadButtons) => {
  const { buttons } = props;
  const onPressed = useGamepad();

  useEffect(() => {
    buttons.forEach(({ gamepadBtn, onPressedFn }) => {
      onPressed(gamepadBtn, onPressedFn);
    });
  }, [onPressed]);

  const MappedButtons = useMemo(() => {
    return buttons?.map(btn => (
      <Button key={btn.label}>
        <RoundedIcon content={'A'} />
        <ButtonLabel>{btn.label}</ButtonLabel>
      </Button>
    ));
  }, []);

  return <Container>{MappedButtons}</Container>;
};

export default GamepadButtons;
