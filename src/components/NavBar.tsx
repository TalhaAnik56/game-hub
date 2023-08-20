import { Image,HStack, Text } from "@chakra-ui/react"
import logo from '../assets/logo2.webp'


const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Akatsuki</Text>
    </HStack>
  )
}

export default NavBar