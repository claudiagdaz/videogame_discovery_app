import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar, { SearchBarProps } from "./SearchBar";

const NavBar = ({ onSearch }: SearchBarProps) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
