import { Box, Flex, Text } from "@chakra-ui/react";
import { ButtonHigh } from "../Button/ButtonHigh";
import { ButtonMedium } from "../Button/ButtonMedium";
import { ButtonLow } from "../Button/ButtonLow";
import { useSelectedPriority } from "../../hooks/useSelectPriority";

export function PriorityContainer() {
  const { selected, setSelected } = useSelectedPriority();

  return (
    <Box w="250px">
      <Text mt="-1rem" fontSize="0.75rem" color="#6F6F6F">Priority</Text>
      <Flex w="100%" justify="space-between" mt="0.25rem">
        <ButtonHigh selected={selected} onClick={() => setSelected(2)}>HIGH</ButtonHigh>
        <ButtonMedium selected={selected} onClick={() => setSelected(1)}>MEDIUM</ButtonMedium>
        <ButtonLow selected={selected} onClick={() => setSelected(0)}>LOW</ButtonLow>
      </Flex>
    </Box>
  );
}
