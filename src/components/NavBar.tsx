import { Image,HStack, Text } from "@chakra-ui/react"
import logo from '../assets/mogo.webp'
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
        <Image src={logo} boxSize='80px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar