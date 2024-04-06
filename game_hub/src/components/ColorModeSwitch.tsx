import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        id='dark-mode'
      ></Switch>
      <Text whiteSpace='nowrap'>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
