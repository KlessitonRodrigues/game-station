import useGlobalContext from 'src/hooks/useGlobalContext';

import { Container } from './styled';

const DynamicBg = (props: DynamicBgProps) => {
  const { img } = props;
  const [global] = useGlobalContext();

  return <Container img={img} bg={global.gradientBg} />;
};

export default DynamicBg;
