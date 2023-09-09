import { useEffect, useState } from 'react';
import { InputModal } from 'src/UI/base/InputModal';
import Panel from 'src/UI/base/Panel';
import { PanelTitle, Panels } from 'src/UI/base/Styles/Panel';
import { dbClient } from 'src/config/db';
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
      <Panel active={focus === 0} title="Title" value={''}>
        <InputModal
          title="Game Title"
          type="color"
          active={focus === 0 && active}
          value={''}
          onChange={name => setForm({ ...form, name })}
        />
      </Panel>
    </Panels>
  );
};

export default ThemeSettingsForm;
