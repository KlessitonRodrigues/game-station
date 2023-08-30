const If = (props: App.Props.If) => (props.check ? props.true || props.children : props.false);

export default If;
