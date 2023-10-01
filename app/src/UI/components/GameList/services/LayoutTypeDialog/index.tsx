import Icons from 'src/UI/base/Icons';
import { Modal, ModalConainer, ModalContent } from 'src/UI/base/Styles/Modals';
import { Description, Title } from 'src/UI/base/Styles/Texts';

import { LayoutOption } from './styled';

export const LayoutTypeDialog = (props: App.Props.LayoutTypeDialog) => {
  const { onSelect } = props;

  return (
    <ModalConainer>
      <Modal>
        <ModalContent>
          <LayoutOption onClick={() => onSelect('list')}>
            <Icons type="gamepad" size={30} />
            <Description>GamePad</Description>
          </LayoutOption>
          <LayoutOption onClick={() => onSelect('grid')}>
            <Icons type="mouse" size={30} />
            <Description>Mouse</Description>
          </LayoutOption>
        </ModalContent>
        <Title>Controlls</Title>
      </Modal>
    </ModalConainer>
  );
};
