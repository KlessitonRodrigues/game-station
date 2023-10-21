import { useEffect, useState } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import InputField from 'src/UI/base/InputField';
import { Form, FormTitle } from 'src/UI/base/Styles/Form';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { UIButtons } from 'src/utils/constants/UIButtons';

import { initialState } from './services/handleForm';

const GameDetailsForm = () => {
  const onPressed = useGamepad();
  const { active, focus, setActive, setFocus } = useScreenState();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    onPressed('ArrowUp', () => setFocus(focus - 1));
    onPressed('ArrowDown', () => setFocus(focus + 1));
    onPressed('ButtonA', () => active || setActive(true));
    onPressed('ButtonB', () => !active || setActive(false));
    onPressed('ButtonX', () => dbClient.games.create({ gameInfo: form }));
  }, [onPressed]);

  return (
    <Form>
      <FormTitle>Add New Game</FormTitle>

      <InputField
        type="text"
        title="Title"
        focus={focus === 0}
        active={focus === 0 && active}
        value={form.name}
        onChange={name => setForm({ ...form, name })}
      />

      <InputField
        type="text"
        title="Publisher"
        focus={focus === 1}
        active={focus === 1 && active}
        value={form.publisher}
        onChange={publisher => setForm({ ...form, publisher })}
      />

      <InputField
        type="img"
        title="Cover"
        focus={focus === 2}
        active={focus === 2 && active}
        value={form.name + ' cover pc'}
        onChange={cover => setForm({ ...form, cover })}
      />

      <InputField
        type="img"
        title="Background"
        focus={focus === 3}
        active={focus === 3 && active}
        value={form.name + ' background'}
        onChange={background => setForm({ ...form, background })}
      />

      <InputField
        type="file"
        title="Location"
        focus={focus === 4}
        active={focus === 4 && active}
        value={form.gamePath}
        onChange={gameFile => setForm({ ...form, gameFile })}
      />

      <GamepadButtons buttons={UIButtons.GameDetailsForm} />
    </Form>
  );
};

export default GameDetailsForm;
