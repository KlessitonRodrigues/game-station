import { useEffect, useState } from 'react';
import InputField from 'src/UI/base/InputField';
import { PanelTitle, Panels } from 'src/UI/base/Styles/Panel';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

const ThemeSettingsForm = () => {
  const onPressed = useGamepad();
  const { active, focus, setUI } = useUIState();
  const [form, setForm] = useState({});

  useEffect(() => {
    onPressed('ArrowUp', () => setUI('focus', focus - 1));
    onPressed('ArrowDown', () => setUI('focus', focus + 1));
    onPressed('ButtonA', () => setUI('active', !active));
    onPressed('ButtonX', () => {});
  }, [onPressed]);

  return (
    <Panels>
      <PanelTitle>Theme Settings</PanelTitle>
      <InputField
        focus={focus === 0}
        title="Title"
        type="color"
        active={focus === 0 && active}
        value={''}
        onChange={name => setForm({ ...form, name })}
      />
    </Panels>
  );
};

export default ThemeSettingsForm;
