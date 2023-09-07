import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { bgGradientList } from '../../../utils/constants/gradient';
import Icons from '../Icons';
import { ColorItem, Row } from './styled';

const colors = Object.keys(bgGradientList) as App.Utils.GradientBgOptions[];

const ColorPicker = (props: App.Props.ColorPicker) => {
  const { active, value, onChange } = props;
  const onPressed = useGamepad();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    onPressed('ArrowLeft', () => selected > 0 && setSelected(selected - 1));
    onPressed('ArrowRight', () => selected < 11 && setSelected(selected + 1));
    onPressed('ButtonA', () => onChange(colors[selected]));
  }, [onPressed]);

  return (
    <Row>
      {active && <Icons type="arrow-left" size={12} />}
      {Object.values(bgGradientList).map((color, i) => {
        return <ColorItem key={color} selected={selected === i} bg={color} />;
      })}
      {active && <Icons type="arrow-right" size={12} />}
    </Row>
  );
};

export default ColorPicker;
