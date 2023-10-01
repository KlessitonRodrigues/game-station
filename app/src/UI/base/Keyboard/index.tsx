import { useEffect, useMemo } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

import { KeyboardSVG } from './services/SVGMap';
import { getKeyId } from './services/keyMap';
import { Container } from './styled';

const Keyboard = (props: App.Props.Keyboard) => {
  const { onKeyPress } = props;
  const onPress = useGamepad();
  const { focus, option, setUI } = useUIState();
  const keyId = useMemo(() => getKeyId(option, focus), [option, focus]);

  useEffect(() => {
    onPress('ArrowUp', () => setUI('focus', focus - 1));
    onPress('ArrowDown', () => setUI('focus', focus + 1));
    onPress('ArrowLeft', () => setUI('option', option - 1));
    onPress('ArrowRight', () => setUI('option', option + 1));
    onPress('ButtonA', () => {
      if (keyId === 'space') return onKeyPress(' ');
      if (keyId === 'esc') return onKeyPress('');
      return onKeyPress(keyId);
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
    <Container>
      <KeyboardSVG />
    </Container>
  );
};

export default Keyboard;
