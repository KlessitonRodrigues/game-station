import { useEffect, useMemo, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';

import { KeyboardSVG } from './services/SVGMap';
import { getKeyId } from './services/keyMap';
import { Container } from './styled';

const Keyboard = (props: App.Props.Keyboard) => {
  const { value, onChange, onEnterPress, onEscPress } = props;

  const onPress = useGamepad();
  const { focus, option, setFocus, setOption } = useScreenState();
  const [shift, setShift] = useState(false);
  const keyId = useMemo(() => getKeyId(option, focus), [option, focus]);

  useEffect(() => {
    onPress('ArrowUp', () => focus && setFocus(focus - 1));
    onPress('ArrowDown', () => focus < 4 && setFocus(focus + 1));
    onPress('ArrowLeft', () => option && setOption(option - 1));
    onPress('ArrowRight', () => option < 11 && setOption(option + 1));
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
    if (keyPath) {
      keyPath.style.fill = '#fff4';
      keyPath.style.stroke = '#ccc';
    }

    return () => {
      if (keyPath) {
        keyPath.style.fill = 'transparent';
        keyPath.style.stroke = '#999';
      }
    };
  }, [option, focus]);

  return (
    <Container shift={shift}>
      <KeyboardSVG />
    </Container>
  );
};

export default Keyboard;
