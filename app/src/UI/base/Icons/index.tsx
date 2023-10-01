import { iconMap } from './services/iconMap';
import { Container } from './styled';

const Icons = (props: App.Props.Icons) => {
  const { type, size, style } = props;
  return (
    <Container className="icon" size={size} style={style}>
      {iconMap[type]}
    </Container>
  );
};

export default Icons;
