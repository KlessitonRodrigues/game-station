import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { bgGradientList } from '../../../utils/gradient';
import Icons from '../Icons';
import { ColorItem, Row } from './styled';

const colors = Object.values(bgGradientList);

const ColorPicker = (props: Props.ColorPicker) => {
  const { active, value, onChange } = props;
  const [pressed] = useGamepad();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (pressed.includes('ArrowLeft')) selected > 0 && setSelected(selected - 1);
    if (pressed.includes('ArrowRight')) selected < 9 && setSelected(selected + 1);
    if (pressed.includes('ButtonA')) onChange(colors[selected]);
  }, [pressed]);

  return (
    <Row>
      {active && <Icons type="arrow-left" size={12} />}
      {colors.map((color, i) => {
        return <ColorItem key={color} selected={selected === i} bg={color} />;
      })}
      {active && <Icons type="arrow-right" size={12} />}
    </Row>
  );
};

export default ColorPicker;
