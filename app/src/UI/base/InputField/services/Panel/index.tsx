import { Container, Content, Header, Title, Value } from './styled';

const Panel = (props: App.Props.Panel) => {
  const { focus, active, title, value, keepOpen, children } = props;

  return (
    <Container
      active={active}
      focus={focus}
      ref={ref => ref && focus && ref.scrollIntoView({ block: 'center' })}
    >
      <Header>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Header>
      <Content open={keepOpen}>{children}</Content>
    </Container>
  );
};

export default Panel;
