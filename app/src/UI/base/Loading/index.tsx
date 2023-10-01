import Icons from '../Icons';
import If from '../If';
import { Container, Description, FullScreen, Spinner, Title } from './styled';

const Loading = (props: App.Props.Loading) => {
  const { show, type, title, description } = props;
  return (
    <Container>
      <If check={show && type === 'icon'}>
        <Spinner>
          <Icons type="spinner" size={12} />
        </Spinner>
      </If>

      <If check={show && type === 'fullScreen'}>
        <FullScreen>
          <Spinner>
            <Icons type="spinner" size={12} />
          </Spinner>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </FullScreen>
      </If>
    </Container>
  );
};

export default Loading;
