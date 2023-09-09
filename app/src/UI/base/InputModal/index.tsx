import If from 'src/UI/base/If';

import { ColorInputModal } from './services/ColorInput';
import { FileInputModal } from './services/FileInput';
import { ImageInputModal } from './services/ImageInput';
import { TextInputModal } from './services/TextInput';
import { Container, Modal, ModalBg, Title } from './styled';

export const InputModal = (props: App.Props.InputModal) => {
  const { type, active, title } = props;

  return (
    <If check={active}>
      <Container>
        <ModalBg>
          <Modal>
            <Title>{title}</Title>
            <If check={type === 'text'} true={<TextInputModal {...props} />} />
            <If check={type === 'img'} true={<ImageInputModal {...props} />} />
            <If check={type === 'file'} true={<FileInputModal {...props} />} />
            <If check={type === 'color'} true={<ColorInputModal {...props} />} />
          </Modal>
        </ModalBg>
      </Container>
    </If>
  );
};
