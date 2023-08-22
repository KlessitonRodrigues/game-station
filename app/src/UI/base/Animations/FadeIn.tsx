import { PropsWithChildren } from 'react';

import { FadeInAnimation } from './styled';

const FadeIn = (props: PropsWithChildren) => {
  return <FadeInAnimation>{props.children}</FadeInAnimation>;
};

export default FadeIn;
