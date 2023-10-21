import { useEffect } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { bgGradientList } from 'src/utils/constants/gradient';

import { ColorItem, Container } from './styled';

const colors = Object.keys(bgGradientList) as App.Utils.BgColors[];

export const ColorInputModal = (props: App.Props.InputField) => {
  const { active, value, onChange } = props;
  const onPressed = useGamepad();
  const screen = useScreenState();

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => screen.setOption(screen.option - 1));
      onPressed('ArrowRight', () => screen.option < 11 && screen.setOption(screen.option + 1));
      onPressed('ButtonA', () => onChange(colors[screen.option]));
    }
  }, [onPressed]);

  return (
    <Container>
      {Object.values(bgGradientList).map((color, i) => {
        return <ColorItem key={color} selected={screen.option === i} bg={color} />;
      })}
    </Container>
  );
};
