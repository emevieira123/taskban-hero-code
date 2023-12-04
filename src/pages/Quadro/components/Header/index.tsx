import { Button, Flex } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex bg="#48409E" w="100%" h="4.5rem" align="center" justify="end" px="4rem">
            <Button bg="#BFB9FF" color="white" _hover={{ bg: "#BFB9FF"}}>
                + Novo Card
            </Button>
        </Flex>
    );
}