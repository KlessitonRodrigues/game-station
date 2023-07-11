import { useEffect, useState } from 'react';
import ColorPicker from 'src/UI/base/ColorPicker';
import { Panel, PanelTitle, Row } from 'src/UI/base/Styles';
import PageContainer from 'src/UI/components/PageContainer';
import useNavigationContext, { updateButtons } from 'src/hooks/useNavigationContext';

const ThemePage = () => {
  const [nav, setNav] = useNavigationContext();
  const [gamepad, setGamepad] = useState(0);

  useEffect(() => {
    setNav(
      updateButtons(nav, {
        ArrowUp: () => setGamepad(gamepad - 1),
        ArrowDown: () => setGamepad(gamepad + 1),
      })
    );
  }, [gamepad]);

  return (
    <PageContainer>
      <Row>
        <Panel focus={gamepad === 0}>
          <PanelTitle>Color</PanelTitle>
          <ColorPicker focus={gamepad === 0} />
        </Panel>
        <Panel focus={gamepad === 1}>
          <PanelTitle>Background</PanelTitle>
          <ColorPicker focus={gamepad === 1} />
        </Panel>
      </Row>
    </PageContainer>
  );
};

export default ThemePage;
