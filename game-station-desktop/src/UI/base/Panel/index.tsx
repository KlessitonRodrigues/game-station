import { Container, Content, Header, Title, Value } from './styled';

export const Panel = (props: PanelProps) => {
  const { active, title, value, children } = props;

  return (
    <Container active={active}>
      <Header>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};
