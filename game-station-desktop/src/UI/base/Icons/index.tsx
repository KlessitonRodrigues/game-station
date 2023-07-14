import { IoGameControllerSharp } from 'react-icons/io5';
import {
  RiApps2Fill,
  RiArrowLeftFill,
  RiArrowRightFill,
  RiBatteryFill,
  RiEarthFill,
  RiMovieFill,
  RiMusic2Fill,
  RiNewspaperFill,
  RiPaintBrushFill,
  RiSettings4Fill,
  RiUser2Fill,
} from 'react-icons/ri';
import { useTheme } from 'styled-components';

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

  switch (type) {
    case 'games':
      return <IoGameControllerSharp {...iconProps} />;
    case 'apps':
      return <RiApps2Fill {...iconProps} />;
    case 'music':
      return <RiMusic2Fill {...iconProps} />;
    case 'midia':
      return <RiMovieFill {...iconProps} />;
    case 'web':
      return <RiEarthFill {...iconProps} />;
    case 'news':
      return <RiNewspaperFill {...iconProps} />;
    case 'theme':
      return <RiPaintBrushFill {...iconProps} />;
    case 'settings':
      return <RiSettings4Fill {...iconProps} />;
    case 'user':
      return <RiUser2Fill {...iconProps} />;
    case 'battery':
      return <RiBatteryFill {...iconProps} />;
    case 'arrow-left':
      return <RiArrowLeftFill {...iconProps} />;
    case 'arrow-right':
      return <RiArrowRightFill {...iconProps} />;
  }
};

export default Icons;
