import { PropsWithChildren } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';

import DynamicBg from '../DynamicBg';
import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <Container>
      <SlideUp>
        <Content>{props.children}</Content>
      </SlideUp>
      <DynamicBg />
    </Container>
  );
};

export default PageContainer;
