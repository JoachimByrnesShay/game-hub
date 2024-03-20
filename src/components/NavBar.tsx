import {
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
  return (
    <HStack
      // justifyContent="space-between"
      padding="15px"
    >
      <Image
        src={logo}
        boxSize="60px"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
