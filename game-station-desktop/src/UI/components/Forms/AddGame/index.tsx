import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import BrowseImages from 'src/UI/base/BrowseImages';
import { Panel } from 'src/UI/base/Panel';
import { InputField } from 'src/UI/base/Styles';
import useGamepad from 'src/hooks/useGamepad';

import { initialState } from './services/handleForm';
import { Container } from './styled';

const AddGameForm = () => {
  const [pressed] = useGamepad();
  const [panel, setPanel] = useState(0);
  const [form, setForm] = useState<GameInfo>(initialState);
  const isActive = (n: number) => n === panel;

  useEffect(() => {
    if (pressed.includes('ArrowUp') && panel > 0) setPanel(panel - 1);
    if (pressed.includes('ArrowDown')) setPanel(panel + 1);
  }, [pressed]);

  return (
    <Container>
      <SlideUp>
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
        <Panel active={isActive(2)} title="Cover Image" value="">
          <BrowseImages active={isActive(2)} query={form.name} sufix="cover" />
        </Panel>
        <Panel active={isActive(3)} title="Background Image" value="">
          <BrowseImages active={isActive(3)} query={form.name} sufix="background hd" />
        </Panel>
      </SlideUp>
    </Container>
  );
};

export default AddGameForm;
