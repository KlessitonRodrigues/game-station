import { useEffect } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';
import { bgGradientList } from 'src/utils/constants/gradient';

import { ColorItem, Container } from './styled';

const colors = Object.keys(bgGradientList) as App.Utils.GradientBgOptions[];

export const ColorInputModal = (props: App.Props.InputModal) => {
  const { active, value, onChange } = props;
  const onPressed = useGamepad();
  const { option, setUI } = useUIState();

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => setUI('option', option - 1));
      onPressed('ArrowRight', () => option < 11 && setUI('option', option + 1));
      onPressed('ButtonA', () => onChange(colors[option]));
    }
  }, [onPressed]);

  return (
    <Container>
      {Object.values(bgGradientList).map((color, i) => {
        return <ColorItem key={color} selected={option === i} bg={color} />;
      })}
    </Container>
  );
};
