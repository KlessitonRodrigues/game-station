import { SlideUpAnimation } from "./styled";
import { PropsWithChildren } from "react";

const SlideUp = (props: PropsWithChildren) => {
  return <SlideUpAnimation>{props.children}</SlideUpAnimation>;
};

export default SlideUp;
