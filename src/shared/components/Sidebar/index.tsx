import { Flex, Heading } from "@chakra-ui/react";

export function Sidebar() {
    return (
        <Flex 
            w="18rem" 
            h="100vh" 
            boxShadow="4px 0px 30px 10px rgba(0, 0, 0, 0.05)"
            justify="center"
            pt="2rem"
        >
            <Heading color="#48409E" textAlign="center">TASKBAN</Heading>
        </Flex>
    );
}