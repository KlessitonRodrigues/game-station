import { PropsWithChildren } from 'react';
import FadeIn from 'src/UI/base/Animations/FadeIn';

import DynamicBg from '../DynamicBg';
import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <Container>
      <FadeIn>
        <Content>{props.children}</Content>
      </FadeIn>
      <DynamicBg />
    </Container>
  );
};

export default PageContainer;
