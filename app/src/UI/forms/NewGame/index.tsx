import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import { BrowseFolders } from 'src/UI/base/BrowseFolders';
import BrowseImages from 'src/UI/base/BrowseImages';
import Panel from 'src/UI/base/Panel';
import { InputField } from 'src/UI/base/Styles';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';

import { initialState } from './services/handleForm';
import { Container } from './styled';

const NewGameForm = () => {
  const [pressed] = useGamepad();
  const [form, setForm] = useState<AppDB.Models.GameInfo>(initialState);
  const [active, setActive] = useState(0);
  const isActive = (n: number) => n === active;

  useEffect(() => {
    if (pressed.includes('ArrowUp') && active > 0) setActive(active - 1);
    if (pressed.includes('ArrowDown')) setActive(active + 1);
    if (pressed.includes('ButtonX')) dbClient.games.create({ gameInfo: form });
  }, [pressed]);

  return (
    <SlideUp>
      <Container>
        <Panel active={isActive(0)} title="Name" value={form.name}>
          <InputField
            value={form.name}
            onChange={el => setForm({ ...form, name: el.target.value })}
          />
        </Panel>
        <Panel active={isActive(1)} title="Publisher" value={form.publisher}>
          <InputField
            value={form.publisher}
            onChange={el => setForm({ ...form, publisher: el.target.value })}
          />
        </Panel>
        <Panel active={isActive(2)} title="Cover" value={form.cover}>
          <BrowseImages
            active={isActive(2)}
            query={form.name}
            sufix="game cover"
            onChange={cover => setForm({ ...form, cover })}
          />
        </Panel>
        <Panel active={isActive(3)} title="Background" value={form.background}>
          <BrowseImages
            active={isActive(3)}
            query={form.name}
            sufix="game background hd"
            onChange={background => setForm({ ...form, background })}
          />
        </Panel>
        <Panel active={isActive(4)} title="Location" value={form.gamePath + form.gameFile}>
          <BrowseFolders
            active={isActive(4)}
            path="/"
            onChange={(gamePath, gameFile) => setForm({ ...form, gamePath, gameFile })}
          />
        </Panel>
      </Container>
    </SlideUp>
  );
};

export default NewGameForm;
