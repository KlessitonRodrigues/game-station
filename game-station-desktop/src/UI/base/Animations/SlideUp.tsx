import { PropsWithChildren } from 'react';

import { SlideUpAnimation } from './styled';

const SlideUp = (props: PropsWithChildren) => {
  return <SlideUpAnimation>{props.children}</SlideUpAnimation>;
};

export default SlideUp;
