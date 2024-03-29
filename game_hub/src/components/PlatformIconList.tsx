import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { PlatformProps } from "../hooks/usePlatforms";

const PlatformIconList = ({ platforms }: PlatformProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color='gray.500'
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

//Before destructuring to avoid the platform.platform
// game.parent_platforms.map((platform) => (
//   <Text>{platform.platform.name}</Text>
// ));
