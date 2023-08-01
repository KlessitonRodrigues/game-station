import { useTheme } from 'styled-components';

import { iconMap } from './services/iconMap';
import { Container } from './styled';

const Icons = (props: IconsProps) => {
  const { type, size, style, onPress } = props;
  const theme = useTheme();

  const iconProps = {
    onClick: onPress,
    style: {
      display: 'block',
      cursor: 'pointer',
      fontSize: theme.size(size || 7),
      color: 'inherit',
      ...style,
    },
  };

  return <Container size={size}>{iconMap[type]}</Container>;
};

export default Icons;
