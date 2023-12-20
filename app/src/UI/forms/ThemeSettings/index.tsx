import { useEffect, useState } from 'react';
import InputField from 'src/UI/base/InputField';
import { Form, FormTitle } from 'src/UI/base/Styles/Form';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';

const ThemeSettingsForm = () => {
  const onPressed = useGamepad();
  const { active, focus, setActive, setFocus } = useScreenState();
  const [form, setForm] = useState({});

  useEffect(() => {
    onPressed('ArrowUp', () => setFocus(focus - 1));
    onPressed('ArrowDown', () => setFocus(focus + 1));
    onPressed('ButtonA', () => setActive(!active));
    onPressed('ButtonX', () => {});
  }, [onPressed]);

  return (
    <Form>
      <FormTitle>Theme Settings</FormTitle>
      <InputField
        focus={focus === 0}
        title="Title"
        type="color"
        active={focus === 0 && active}
        value={''}
        onChange={name => setForm({ ...form, name })}
        onClose={() => {}}
      />
    </Form>
  );
};

export default ThemeSettingsForm;
