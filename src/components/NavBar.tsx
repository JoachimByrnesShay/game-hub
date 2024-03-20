import {
  HStack,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";

interface Props {
  onSearch: (
    searchText: string
  ) => void;
}

const NavBar = ({
  onSearch,
}: Props) => {
  return (
    <HStack padding="15px">
      <Image
        src={logo}
        boxSize="60px"
      />
      <SearchInput
        onSearch={onSearch}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
