import { useState } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import InputField from 'src/UI/base/InputField';
import { Form, FormTitle } from 'src/UI/base/Styles/Form';
import { dbClient } from 'src/config/db';
import useScreenState from 'src/hooks/useScreenState';
import { gameFormState } from 'src/utils/constants/forms';

const GameDetailsForm = () => {
  const { active, focus, setActive, setFocus } = useScreenState();
  const [form, setForm] = useState(gameFormState);
  
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
        value={form.name + ' pc cover'}
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

      <GamepadButtons
        buttons={[
          {
            button: 'ArrowUp',
            onPress: () => focus && !active && setFocus(focus - 1),
          },
          {
            button: 'ArrowDown',
            onPress: () => focus < 4 && !active && setFocus(focus + 1),
          },
          {
            label: 'Editar',
            button: 'ButtonA',
            onPress: () => active || setActive(true),
          },
          {
            label: 'Voltar',
            button: 'ButtonB',
            onPress: () => !active || setActive(false),
          },
          {
            label: 'Salvar',
            button: 'ButtonX',
            onPress: () => {
              console.log(form);

              dbClient.games.create({ gameInfo: form });
            },
          },
        ]}
      />
    </Form>
  );
};

export default GameDetailsForm;
