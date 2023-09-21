import { useMemo } from 'react';

import { RoundedIcon } from './services/Icons';
import { Button, ButtonLabel, Container } from './styled';

const GamepadButtons = (props: App.Props.GamepadButtons) => {
  const { buttons } = props;

  const MappedButtons = useMemo(() => {
    return buttons?.map(btn => (
      <Button key={btn.label}>
        <RoundedIcon content={btn.content} />
        <ButtonLabel>{btn.label}</ButtonLabel>
      </Button>
    ));
  }, []);

  return <Container>{MappedButtons}</Container>;
};

export default GamepadButtons;
