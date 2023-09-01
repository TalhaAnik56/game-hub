import { Image,HStack, Text } from "@chakra-ui/react"
import logo from '../assets/mogo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const NavBar = () => {
  return (
    <HStack padding="20px">
        <Image src={logo} boxSize='80px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar