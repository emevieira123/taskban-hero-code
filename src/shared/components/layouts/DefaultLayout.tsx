import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Flex } from "@chakra-ui/react";

export function DefaultLayout() {
    return (
        <Flex>
            <Sidebar />
            <Outlet />
        </Flex>
    );
}