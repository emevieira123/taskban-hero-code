import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
    return (
        <Flex 
            w="18rem" 
            h="100vh" 
            boxShadow="4px 0px 30px 10px rgba(0, 0, 0, 0.05)"
            align="center"
            flexDirection="column"
            pt="2rem"
        >
            <Heading color="#48409E" textAlign="center" fontSize="2xl">
                TASKBAN
            </Heading>

            <Flex mt="4rem" flexDirection="column" gap="2rem">
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#48409E" : "",
                            fontWeight: isActive ? "bold" : "",
                        }
                    }}
                >
                    Quadro
                </NavLink>

                <NavLink
                    to="/lista"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#48409E" : "",
                            fontWeight: isActive ? "bold" : "",
                        }
                    }}
                >
                    Lista
                </NavLink>
            </Flex>
        </Flex>
    );
}