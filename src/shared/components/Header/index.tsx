import { Button, Flex } from "@chakra-ui/react";

interface HeaderProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  buttonName?: string
}

export function Header({ onClick, buttonName }: HeaderProps) {

  return (
    <Flex bg="#48409E" w="100%" h="4.5rem" align="center" justify="end" px="4rem">
      {
        buttonName &&
        <Button
          bg="#BFB9FF"
          color="white"
          _hover={{ bg: "#BFB9FF" }}
          onClick={onClick}
        >
          {buttonName}
        </Button>
      }
    </Flex>
  );
}
