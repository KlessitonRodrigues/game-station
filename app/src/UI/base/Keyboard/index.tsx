import { useEffect, useMemo, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

import { KeyboardSVG } from './services/SVGMap';
import { getKeyId } from './services/keyMap';
import { Container } from './styled';

const Keyboard = (props: App.Props.Keyboard) => {
  const { value, onChange, onEnterPress, onEscPress } = props;

  const onPress = useGamepad();
  const { focus, option, setUI } = useUIState();
  const [shift, setShift] = useState(false);
  const keyId = useMemo(() => getKeyId(option, focus), [option, focus]);

  useEffect(() => {
    onPress('ArrowUp', () => setUI('focus', focus - 1));
    onPress('ArrowDown', () => setUI('focus', focus + 1));
    onPress('ArrowLeft', () => setUI('option', option - 1));
    onPress('ArrowRight', () => setUI('option', option + 1));
    onPress('ButtonA', () => {
      if (keyId === 'space') return onChange(value + ' ');
      if (keyId === 'tab') return onChange(value + '  ');
      if (keyId === 'enter') return onEnterPress();
      if (keyId === 'esc') return onEscPress();
      if (keyId === 'backspace') return onChange(value.substring(0, value.length - 1));
      if (keyId.includes('shift')) return setShift(!shift);
      if (keyId === 'capslk') return setShift(!shift);
      if (!shift) return onChange(value + keyId.toUpperCase());
      return onChange(value + keyId);
    });
  }, [onPress]);

  useEffect(() => {
    const getEl = (query: string) => document.querySelector(query);
    const keyPath = getEl(`#keyboard-svg .key-${keyId} path`) as SVGPathElement;
    if (keyPath) keyPath.style.fill = '#fff7';
    return () => {
      if (keyPath) keyPath.style.fill = 'transparent';
    };
  }, [option, focus]);

  return (
    <Container shift={shift}>
      <KeyboardSVG />
    </Container>
  );
};

export default Keyboard;
