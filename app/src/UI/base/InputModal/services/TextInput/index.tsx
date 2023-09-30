import If from 'src/UI/base/If';
import Keyboard from 'src/UI/base/Keyboard';
import { InputField } from 'src/UI/base/Styles/Inputs';

export const TextInputModal = (props: App.Props.InputModal) => {
  const { active, value, onChange } = props;
  return (
    <>
      <InputField autoFocus value={value} onChange={ev => onChange(ev.target.value)} />
      <If check={active}>
        <Keyboard onKeyPress={key => onChange(value + key)} />
      </If>
    </>
  );
};
