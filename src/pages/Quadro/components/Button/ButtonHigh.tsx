import { Button, ButtonProps } from "@chakra-ui/react";

interface PriorityButtonProps extends ButtonProps {
  children: React.ReactNode;
  selected?: number;
}

export function ButtonHigh(props: PriorityButtonProps) {
  return (
    <Button
      {...props}
      h="2rem"
      fontSize="0.75rem"
      bg={props.selected === 2 ? "#48409E" : "#FF7979"}
      color="white"
      borderRadius="1rem"
      _hover={{ bg: props.selected === 2 ? "#48409E" : "#FF7979" }}
    >
      {props.children}
    </Button>
  );
}
