import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {BsGlobe} from 'react-icons/bs';
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap:{[key:string]:IconType}={
        playstation:FaPlaystation,
        xbox:FaXbox,
        android:FaAndroid,
        web:BsGlobe,
        ios:MdPhoneIphone,
        pc:FaWindows,
        mac:FaApple,
        nintendo:SiNintendo,
        linux:FaLinux
    }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
