import { useMemo } from 'react';

import { RoundedIcon } from './services/Icons';
import { Button, ButtonLabel, Container } from './styled';

const GamepadButtons = (props: App.Props.GamepadButtons) => {
  const MappedButtons = useMemo(() => {
    return props.buttons?.map(btn => (
      <Button>
        <RoundedIcon content={btn.content} />
        <ButtonLabel>{btn.label}</ButtonLabel>
      </Button>
    ));
  }, []);

  return <Container>{MappedButtons}</Container>;
};

export default GamepadButtons;
