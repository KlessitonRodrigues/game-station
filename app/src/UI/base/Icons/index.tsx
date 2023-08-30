import { iconMap } from './services/iconMap';
import { Container } from './styled';

const Icons = (props: App.Props.Icons) => {
  const { type, size } = props;
  return <Container size={size}>{iconMap[type]}</Container>;
};

export default Icons;
