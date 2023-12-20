import If from '../If';
import { BgImage, Container } from './styled';

const DynamicBg = (props: App.Props.DynamicBg) => {
  const { img, blur } = props;

  return (
    <Container showBg={!img}>
      <If check={!!img}>
        <BgImage src={img} blur={blur} />
      </If>
    </Container>
  );
};

export default DynamicBg;
