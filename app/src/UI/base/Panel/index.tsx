import Icons from '../Icons';
import { Container, Content, Header, Title, Value } from './styled';

const Panel = (props: App.Props.Panel) => {
  const { active, title, value, children } = props;

  return (
    <Container active={active}>
      <Header>
        <Title>{title}</Title>
        <Value>{value?.substring(0, 60)}</Value>
        <Icons type="edit" size={6} />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Panel;
