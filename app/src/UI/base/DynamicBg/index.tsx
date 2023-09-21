import If from '../If';
import { BgImage, Container } from './styled';

const DynamicBg = (props: App.Props.DynamicBg) => {
  const { img, gradient, blurBg } = props;
  return (
    <Container gradient={img ? '' : gradient}>
      <If check={!!img}>
        <BgImage src={img} blur={blurBg} />
      </If>
    </Container>
  );
};

export default DynamicBg;
