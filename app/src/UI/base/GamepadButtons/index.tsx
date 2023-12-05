import { useEffect, useMemo } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { iconContentMap } from './services/iconContentMap';
import { Button, ButtonLabel, Container } from './styled';

const GamepadButtons = (props: App.Props.GamepadButtons) => {
  const { buttons } = props;
  const onPressed = useGamepad();

  useEffect(() => {
    buttons.forEach(({ button, onPress }) => onPressed(button, onPress));
  }, [onPressed]);

  const MappedButtons = useMemo(() => {
    return buttons?.map(btn => {
      if (!btn.label) return null;

      const Icon = iconContentMap(btn.button);
      return (
        <Button key={btn.label}>
          {Icon}
          <ButtonLabel>{btn.label}</ButtonLabel>
        </Button>
      );
    });
  }, []);

  return <Container>{MappedButtons}</Container>;
};

export default GamepadButtons;
