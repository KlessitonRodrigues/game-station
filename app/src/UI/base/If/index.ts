const If = (props: IfProps) => (props.check ? props.true || props.children : props.false);

export default If;
