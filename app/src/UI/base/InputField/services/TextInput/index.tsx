import If from 'src/UI/base/If';
import Keyboard from 'src/UI/base/Keyboard';
import { InputField } from 'src/UI/base/Styles/Inputs';

export const TextInputModal = (props: App.Props.InputField) => {
  const { active, value, onChange } = props;

  return (
    <>
      <InputField
        ref={el => (active ? el?.focus() : el?.blur())}
        value={value}
        onChange={ev => onChange(ev.target.value)}
        autoFocus
      />
      <If check={active}>
        <Keyboard value={value} onChange={onChange} onEnterPress={() => {}} onEscPress={() => {}} />
      </If>
    </>
  );
};
