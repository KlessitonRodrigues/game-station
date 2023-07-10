import { IoGameControllerSharp } from "react-icons/io5";
import {
  RiSettings4Fill,
  RiApps2Fill,
  RiMusic2Fill,
  RiNewspaperFill,
  RiPaintBrushFill,
} from "react-icons/ri";
import { useTheme } from "styled-components";

const Icons = (props: IconsProps) => {
  const { type, size, style, onPress } = props;
  const theme = useTheme();

  const iconProps = {
    onClick: onPress,
    style: {
      display: "block",
      cursor: "pointer",
      fontSize: theme.size(size || 7),
      color: "inherit",
      ...style,
    },
  };

  switch (type) {
    case "games":
      return <IoGameControllerSharp {...iconProps} />;
    case "apps":
      return <RiApps2Fill {...iconProps} />;
    case "music":
      return <RiMusic2Fill {...iconProps} />;
    case "news":
      return <RiNewspaperFill {...iconProps} />;
    case "theme":
      return <RiPaintBrushFill {...iconProps} />;
    case "settings":
      return <RiSettings4Fill {...iconProps} />;
  }
};

export default Icons;
