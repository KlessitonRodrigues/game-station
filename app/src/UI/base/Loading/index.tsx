import Icons from '../Icons';
import { Container, Description, Spinner, Title } from './styled';

const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Icons type="spinner" size={12} />
      </Spinner>
      <Title>Optimizing Images</Title>
      <Description>Will happening once only</Description>
    </Container>
  );
};

export default Loading;
