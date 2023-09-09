import { InputField } from 'src/UI/base/Styles/Inputs';

export const TextInputModal = (props: App.Props.InputModal) => {
  const { value, onChange } = props;
  return <InputField autoFocus value={value} onChange={ev => onChange(ev.target.value)} />;
};
