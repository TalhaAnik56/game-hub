import { Image,HStack } from "@chakra-ui/react"
import logo from '../assets/logo2.webp'
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
        <Image src={logo} boxSize='60px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar