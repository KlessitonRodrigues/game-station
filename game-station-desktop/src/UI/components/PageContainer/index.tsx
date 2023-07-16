import { PropsWithChildren } from 'react';
import FadeIn from 'src/UI/base/Animations/FadeIn';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <Container>
      <FadeIn>
        <Content>{props.children}</Content>
      </FadeIn>
    </Container>
  );
};

export default PageContainer;
