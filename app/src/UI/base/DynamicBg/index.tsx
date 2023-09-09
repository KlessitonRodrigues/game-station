import { Container, Effects } from './styled';

const DynamicBg = (props: App.Props.DynamicBg) => {
  return (
    <Container {...props}>
      <Effects {...props} />
    </Container>
  );
};

export default DynamicBg;
