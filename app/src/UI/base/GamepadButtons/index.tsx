import { useMemo } from 'react';

import { iconContentMap } from './services/iconContentMap';
import { Button, ButtonLabel, Container } from './styled';

const GamepadButtons = (props: App.Props.GamepadButtons) => {
  const { buttons } = props;

  const MappedButtons = useMemo(() => {
    return buttons?.map(btn => {
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
