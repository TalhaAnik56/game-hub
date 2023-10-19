import { Image, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/mogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);
  return (
    <HStack padding="20px">
      <Link to={"/"}>
        <Image
          src={logo}
          objectFit={"cover"}
          height={{base:"50px",lg:"80px"}}
          width={{base:"100px",lg:"80px"}}
          //boxSize={{base:"100px",md:"80px"}}
          onClick={() => setGameQuery()}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
