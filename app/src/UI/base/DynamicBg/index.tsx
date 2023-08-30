import { Container } from './styled';

const DynamicBg = (props: Props.DynamicBg) => {
  const { img, gradient, zIndex } = props;
  return <Container img={img} bg={gradient} zIndex={zIndex} />;
};

export default DynamicBg;
