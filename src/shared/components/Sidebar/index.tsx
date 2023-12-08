import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useItemsMenu from "./hooks/useItemsMenu";

export function Sidebar() {
  const { itemsMenu } = useItemsMenu();

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
        {
          itemsMenu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#48409E" : "#6F6F6F",
                  fontWeight: isActive ? "bold" : "",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }
              }}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))
        }
      </Flex>
    </Flex>
  );
}
