import useGlobalContext from 'src/hooks/useGlobalContext';

import { Container } from './styled';

const DynamicBg = () => {
  const [global] = useGlobalContext();
  return <Container bg={global.gradientBg}></Container>;
};

export default DynamicBg;
