import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface SearchBarProps {
  onSearch: (searchInput: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInputRef.current !== null) {
          onSearch(searchInputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder='Search any game'
          variant='filled'
          ref={searchInputRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
