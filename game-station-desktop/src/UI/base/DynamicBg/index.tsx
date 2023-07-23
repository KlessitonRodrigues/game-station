import { Container } from './styled';

const DynamicBg = (props: DynamicBgProps) => {
  const { img, gradient, zIndex } = props;
  return <Container img={img} bg={gradient} zIndex={zIndex} />;
};

export default DynamicBg;
