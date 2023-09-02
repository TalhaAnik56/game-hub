import { Image,HStack, Text } from "@chakra-ui/react"
import logo from '../assets/mogo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props{
  onSearch:(searchText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="20px">
        <Image src={logo} boxSize='80px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar