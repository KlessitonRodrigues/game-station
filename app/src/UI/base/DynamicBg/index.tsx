import { bgGradientList } from 'src/utils/constants/gradient';

import If from '../If';
import { BgImage, Container } from './styled';

const DynamicBg = (props: App.Props.DynamicBg) => {
  const { img, color, blur } = props;
  const bgGradient = bgGradientList[color];

  return (
    <Container gradient={img ? '' : bgGradient}>
      <If check={!!img}>
        <BgImage src={img} blur={blur} />
      </If>
    </Container>
  );
};

export default DynamicBg;
