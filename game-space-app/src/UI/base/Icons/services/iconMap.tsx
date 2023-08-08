import { IoGameControllerSharp } from 'react-icons/io5';
import {
  RiApps2Fill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBatteryFill,
  RiEarthFill,
  RiFile2Line,
  RiFolderFill,
  RiGameFill,
  RiImage2Fill,
  RiMovieFill,
  RiMusic2Fill,
  RiNewspaperFill,
  RiPaintBrushFill,
  RiSearchLine,
  RiSettings4Fill,
  RiUsbFill,
  RiUser2Fill,
} from 'react-icons/ri';

export const iconMap: Record<IconsProps['type'], React.ReactElement> = {
  games: <RiGameFill />,
  apps: <RiApps2Fill />,
  music: <RiMusic2Fill />,
  midia: <RiMovieFill />,
  web: <RiEarthFill />,
  news: <RiNewspaperFill />,
  theme: <RiPaintBrushFill />,
  settings: <RiSettings4Fill />,
  user: <RiUser2Fill />,
  battery: <RiBatteryFill />,
  gamepad: <IoGameControllerSharp />,
  search: <RiSearchLine />,
  folder: <RiFolderFill />,
  file: <RiFile2Line />,
  image: <RiImage2Fill />,
  'arrow-left': <RiArrowLeftSLine />,
  'arrow-right': <RiArrowRightSLine />,
  usb: <RiUsbFill />,
  controls: <IoGameControllerSharp />,
};