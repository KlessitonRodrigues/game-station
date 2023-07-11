import { useEffect, useState } from 'react';
import useNavigationContext, { updateButtons } from 'src/hooks/useNavigationContext';
import { materialColors as mc } from 'src/styles/lib/palettes';

import { Row } from '../Styles';
import { ColorItem } from './styled';

const ColorPicker = (props: ColorPickerProps) => {
  const { focus } = props;
  const [nav, setNav] = useNavigationContext();
  const [gamepad, setGamepad] = useState(0);

  useEffect(() => {
    if (!focus) return undefined;
    setNav(
      updateButtons(nav, {
        ArrowLeft: () => setGamepad(gamepad - 1),
        ArrowRight: () => setGamepad(gamepad + 1),
      })
    );
  }, [focus, gamepad]);

  return (
    <Row centered>
      <ColorItem selected={gamepad === 0} bg={mc.purple['500']} />
      <ColorItem selected={gamepad === 1} bg={mc.blue['500']} />
      <ColorItem selected={gamepad === 2} bg={mc.lightBlue['500']} />
      <ColorItem selected={gamepad === 3} bg={mc.teal['500']} />
      <ColorItem selected={gamepad === 4} bg={mc.lime['500']} />
      <ColorItem selected={gamepad === 5} bg={mc.yellow['500']} />
      <ColorItem selected={gamepad === 6} bg={mc.red['900']} />
      <ColorItem selected={gamepad === 7} bg={mc.brown['600']} />
      <ColorItem selected={gamepad === 8} bg={mc.blueGrey['800']} />
    </Row>
  );
};

export default ColorPicker;
