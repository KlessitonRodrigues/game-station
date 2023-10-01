import If from 'src/UI/base/If';

import Panel from '../Panel';
import { ColorInputModal } from './services/ColorInput';
import { FileInputModal } from './services/FileInput';
import { ImageInputModal } from './services/ImageInput';
import { TextInputModal } from './services/TextInput';
import { Container } from './styled';

const InputField = (props: App.Props.InputField) => {
  const { type } = props;

  return (
    <Panel {...props}>
      <Container>
        <If check={type === 'text'} true={<TextInputModal {...props} />} />
        <If check={type === 'img'} true={<ImageInputModal {...props} />} />
        <If check={type === 'file'} true={<FileInputModal {...props} />} />
        <If check={type === 'color'} true={<ColorInputModal {...props} />} />
      </Container>
    </Panel>
  );
};

export default InputField;
