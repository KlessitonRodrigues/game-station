import { useEffect, useState } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import { InputModal } from 'src/UI/base/InputModal';
import Panel from 'src/UI/base/Panel';
import { PanelTitle, Panels } from 'src/UI/base/Styles/Panel';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';
import { UIButtons } from 'src/utils/constants/UIButtons';

import { initialState } from './services/handleForm';

const GameDetailsForm = () => {
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
    <Panels>
      <PanelTitle>Add New Game</PanelTitle>
      <Panel active={focus === 0} title="Title" value={form.name}>
        <InputModal
          title="Game Title"
          type="text"
          active={focus === 0 && active}
          value={form.name}
          onChange={name => setForm({ ...form, name })}
        />
      </Panel>
      <Panel active={focus === 1} title="Publisher" value={form.publisher}>
        <InputModal
          title="Game Publisher"
          type="text"
          active={focus === 1 && active}
          value={form.publisher}
          onChange={publisher => setForm({ ...form, publisher })}
        />
      </Panel>
      <Panel active={focus === 2} title="Cover" value={form.cover}>
        <InputModal
          title="Game Cover"
          type="img"
          active={focus === 2 && active}
          value={form.name + ' box art'}
          onChange={cover => setForm({ ...form, cover })}
        />
      </Panel>
      <Panel active={focus === 3} title="Background" value={form.background}>
        <InputModal
          title="Game Background"
          type="img"
          active={focus === 3 && active}
          value={form.name + ' background'}
          onChange={background => setForm({ ...form, background })}
        />
      </Panel>
      <Panel active={focus === 4} title="Location" value={form.gamePath + form.gameFile}>
        <InputModal
          title="Game Path"
          type="file"
          active={focus === 4 && active}
          value={form.gamePath}
          onChange={gameFile => setForm({ ...form, gameFile })}
        />
      </Panel>
      <GamepadButtons buttons={UIButtons.GameDetailsForm} />
    </Panels>
  );
};

export default GameDetailsForm;
