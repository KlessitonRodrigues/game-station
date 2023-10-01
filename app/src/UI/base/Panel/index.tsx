import { Container, Content, Header, Title, Value } from './styled';

const Panel = (props: App.Props.Panel) => {
  const { focus, active, title, value, children } = props;

  return (
    <Container active={active} focus={focus}>
      <Header>
        <Title>{title}</Title>
        <Value>{value?.substring(0, 60)}</Value>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Panel;
