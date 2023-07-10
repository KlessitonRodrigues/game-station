import {
  IoCopyOutline,
  IoLockClosed,
  IoLockClosedOutline,
  IoLogoGithub,
  IoMoon,
  IoMoonOutline,
  IoOpenOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { useTheme } from "styled-components";

const Icons = (props: IconsProps) => {
  const { type, size, style, onPress } = props;
  const theme = useTheme();

  const iconProps = {
    onClick: onPress,
    style: {
      display: "block",
      cursor: "pointer",
      fontSize: theme.size(size || 8),
      color: "inherit",
      ...style,
    },
  };

  switch (type) {
    case "lock":
      return <IoLockClosedOutline {...iconProps} />;
    case "lock-fill":
      return <IoLockClosed {...iconProps} />;
    case "lock-open":
      return <IoOpenOutline {...iconProps} />;
    case "copy":
      return <IoCopyOutline {...iconProps} />;
    case "settings":
      return <IoSettingsOutline {...iconProps} />;
    case "sun":
      return <IoSunnyOutline {...iconProps} />;
    case "moon":
      return <IoMoonOutline {...iconProps} />;
    case "moon-fill":
      return <IoMoon {...iconProps} />;
    case "gh-logo":
      return <IoLogoGithub {...iconProps} />;
  }
};

export default Icons;
