import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardProps) => {
  return (
    <Box width='100%' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
