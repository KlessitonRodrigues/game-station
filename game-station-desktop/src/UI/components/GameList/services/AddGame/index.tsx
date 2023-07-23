import { useEffect, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import { InputField, Panel, PanelContent, PanelTitle } from 'src/UI/base/Styles';
import { BrowserResources } from 'src/UI/components/BrowseResource';
import useGamepad from 'src/hooks/useGamepad';

import { Container } from './styled';

export const AddGame = () => {
  const [pressed] = useGamepad();
  const [panel, setPanel] = useState(0);

  useEffect(() => {
    if (pressed.includes('ArrowUp') && panel > 0) setPanel(panel - 1);
    if (pressed.includes('ArrowDown')) setPanel(panel + 1);
  }, [pressed]);

  return (
    <Container>
      <SlideUp>
        <Panel active={panel === 0}>
          <PanelTitle>Name</PanelTitle>
          <PanelContent>
            <InputField />
          </PanelContent>
        </Panel>
        <Panel active={panel === 1}>
          <PanelTitle>Publisher</PanelTitle>
          <PanelContent>
            <InputField />
          </PanelContent>
        </Panel>
        <Panel active={panel === 2}>
          <PanelTitle>Cover</PanelTitle>
          <PanelContent>
            <BrowserResources query="Watch dogs 2" type="cover" />
          </PanelContent>
        </Panel>
        <Panel active={panel === 3}>
          <PanelTitle>Background</PanelTitle>
          <PanelContent>
            <BrowserResources query="Watch dogs 2" type="background" />
          </PanelContent>
        </Panel>
        <Panel active={panel === 4}>
          <PanelTitle>Location</PanelTitle>
        </Panel>
      </SlideUp>
    </Container>
  );
};
