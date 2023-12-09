import { Flex, Heading, IconButton, Img, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { useState } from "react";

import { IoIosArrowForward } from 'react-icons/io'
import useItemsMenu from "./hooks/useItemsMenu";

export function Sidebar() {
  const [open, setOpen] = useState(true);
  const { itemsMenu } = useItemsMenu();

  const [isLargerThanMD] = useMediaQuery('(max-width: 33.75rem)');

  return (
    <Flex>
      <Flex
        w={!isLargerThanMD ? (open ? "14rem" : "5rem") : "5rem"}
        h={'100vh'}
        position="relative"
        p="1.25rem"
        transitionDuration="0.2s"
        flexDirection="column"
        borderRight="1px"
        borderColor="gray.200"
        boxShadow="4px 0px 30px 10px rgba(0, 0, 0, 0.05)"
      >
        {
          !isLargerThanMD && (
            <IconButton
              icon={<IoIosArrowForward />}
              aria-label=""
              position="absolute"
              fontSize="1.25rem"
              right="-0.75rem"
              top="3.5rem"
              bg="#48409E"
              color="white"
              borderRadius="50%"
              _hover={{ bg: "purple.700" }}
              style={{ rotate: open ? "180deg" : "" }}
              onClick={() => setOpen(!open)}
            />
          )
        }
        <Flex align="center" justify="center" gap="1em">
          {
            !isLargerThanMD && open ?
              (<Heading color="#48409E" textAlign="center" fontSize="2xl">
                TASKBAN
              </Heading>)
              : (
                <Img src="/LogoTaskban.svg" />
              )
          }
        </Flex>

        <ul style={{ paddingTop: "1.5rem", marginTop: "1rem" }}>
          {itemsMenu.map((menu, index) => (
            <li key={index} style={{ listStyleType: "none" }}>
              <Link
                as={ReactRouterLink}
                to={menu.link}
                textDecoration="none"
                p="0.5rem"
                mt="1rem"
                fontSize="0.875rem"
                display="flex"
                alignItems="center"
                gap="1rem"
                _hover={{ borderRadius: "0.5rem", bg: "purple.50" }}
                _activeLink={{ color: "#48409E" }}
              >
                {menu.icon}
                {!isLargerThanMD && (open && <Text fontSize="1.25rem" transformOrigin="left">{menu.name}</Text>)}
              </Link>
            </li>
          ))}
        </ul>

        <Flex
          position="absolute"
          bottom="0"
          left="1"
          mb="1rem"
          p="0.5rem"
          align="center"
          justify="center"
          gap="1rem"
          cursor="pointer"
          flexDirection="column"
          w="96%"
        >
        </Flex>

      </Flex>
    </Flex>
  );
}
