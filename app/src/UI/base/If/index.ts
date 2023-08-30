const If = (props: Props.If) => (props.check ? props.true || props.children : props.false);

export default If;
