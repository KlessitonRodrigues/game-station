import { useEffect, useState } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import InputField from 'src/UI/base/InputField';
import { Form, FormTitle } from 'src/UI/base/Styles/Form';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { UIButtons } from 'src/utils/constants/UIButtons';
import { gameFormState } from 'src/utils/constants/forms';

const GameInfoForm = () => {
  const { active, focus, setActive, setFocus } = useScreenState();
  const [form, setForm] = useState(gameFormState);
  const onPressed = useGamepad();

  useEffect(() => {
    onPressed('ArrowUp', () => focus && !active && setFocus(focus - 1));
    onPressed('ArrowDown', () => focus < 4 && !active && setFocus(focus + 1));
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
        onClose={() => setActive(false)}
      />

      <InputField
        type="text"
        title="Publisher"
        focus={focus === 1}
        active={focus === 1 && active}
        value={form.publisher}
        onChange={publisher => setForm({ ...form, publisher })}
        onClose={() => setActive(false)}
      />

      <InputField
        type="img"
        title="Cover"
        sufix=" pc cover"
        focus={focus === 2}
        active={focus === 2 && active}
        value={form.name}
        keepOpen={!!form.cover}
        onChange={cover => setForm({ ...form, cover })}
        onClose={() => setActive(false)}
      />

      <InputField
        type="img"
        title="Background"
        sufix=" background"
        focus={focus === 3}
        active={focus === 3 && active}
        value={form.name}
        keepOpen={!!form.background}
        onChange={background => setForm({ ...form, background })}
        onClose={() => setActive(false)}
      />

      <InputField
        type="file"
        title="Location"
        focus={focus === 4}
        active={focus === 4 && active}
        value={form.path}
        onChange={path => setForm({ ...form, path })}
        onClose={() => setActive(false)}
      />

      <GamepadButtons buttons={UIButtons.GameListGrid} />
    </Form>
  );
};

export default GameInfoForm;
