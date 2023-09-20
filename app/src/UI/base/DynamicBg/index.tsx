import If from '../If';
import { BgImage, Container } from './styled';

const DynamicBg = (props: App.Props.DynamicBg) => {
  const { img, gradient } = props;
  return (
    <Container gradient={gradient}>
      <If check={!!img}>
        <BgImage src={img} />
      </If>
    </Container>
  );
};

export default DynamicBg;
