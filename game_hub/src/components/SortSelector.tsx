import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface sortSelectorProps {
  onSelectSortOrder: (sortParameter: string) => void;
  sortParameter: string;
}

const SortSelector = ({
  onSelectSortOrder,
  sortParameter,
}: sortSelectorProps) => {
  const sortParameters = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortParameters = sortParameters.find(
    (parameter) => parameter.value === sortParameter
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By: {currentSortParameters?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortParameters.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
