import { PropsWithChildren } from 'react';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default PageContainer;
