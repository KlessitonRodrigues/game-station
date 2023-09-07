import { useEffect, useState } from 'react';
import { InputModal } from 'src/UI/base/InputModal';
import Panel from 'src/UI/base/Panel';
import { FormTitle } from 'src/UI/base/Styles/Text';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

import { initialState } from './services/handleForm';
import { Container } from './styled';

const NewGameForm = () => {
  const onPressed = useGamepad();
  const { active, focus, setUI } = useUIState();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    onPressed('ArrowUp', () => setUI('focus', focus - 1));
    onPressed('ArrowDown', () => setUI('focus', focus + 1));
    onPressed('ButtonA', () => setUI('active', !active));
    onPressed('ButtonX', () => dbClient.games.create({ gameInfo: form }));
  }, [onPressed]);

  return (
    <Container>
      <FormTitle>Add New Game</FormTitle>
      <Panel active={focus === 0} title="Title" value={form.name}>
        <InputModal
          title="Title"
          type="text"
          active={focus === 0 && active}
          value={form.name}
          onChange={name => setForm({ ...form, name })}
        />
      </Panel>
      <Panel active={focus === 1} title="Publisher" value={form.publisher}>
        <InputModal
          title="Publisher"
          type="text"
          active={focus === 1 && active}
          value={form.publisher}
          onChange={publisher => setForm({ ...form, publisher })}
        />
      </Panel>
      <Panel active={focus === 2} title="Cover" value={form.cover}>
        <InputModal
          title="Cover"
          type="img"
          active={focus === 2 && active}
          value={form.name + ' cover'}
          onChange={cover => setForm({ ...form, cover })}
        />
      </Panel>
      <Panel active={focus === 3} title="Background" value={form.background}>
        <InputModal
          title="Cover"
          type="img"
          active={focus === 3 && active}
          value={form.name + ' background'}
          onChange={background => setForm({ ...form, background })}
        />
      </Panel>
      <Panel active={focus === 4} title="Location" value={form.gamePath + form.gameFile}></Panel>
    </Container>
  );
};

export default NewGameForm;
