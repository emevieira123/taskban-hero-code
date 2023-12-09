import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const { onOpen } = useModal();
  const [isLargerThanMD] = useMediaQuery('(max-width: 33.75rem)');

  return (
    <Flex bg="#48409E" w="100%" h="4.5rem" align="center" justify={isLargerThanMD ? "center" : "end"} px="4rem">
      <Button
        bg="#BFB9FF"
        color="white"
        _hover={{ bg: "#BFB9FF" }}
        onClick={onOpen}
      >
        + Novo Card
      </Button>
    </Flex>
  );
}
