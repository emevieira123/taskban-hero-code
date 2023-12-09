import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../../shared/components/Header";

export default function Lista() {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="#F1F0FF"
      flexDirection="column"
    >
      <Header />
      <Flex align="center" justify="center" h="100%">
        <Text>Lista</Text>
      </Flex>
    </Flex>
  );
}
