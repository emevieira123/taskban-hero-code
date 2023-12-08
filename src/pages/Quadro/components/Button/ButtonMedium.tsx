import { Button, ButtonProps } from "@chakra-ui/react";

interface PriorityButtonProps extends ButtonProps {
  children: React.ReactNode;
  selected?: number;
}

export function ButtonMedium(props: PriorityButtonProps) {
  return (
    <Button
      {...props}
      h="2rem"
      fontSize="0.75rem"
      bg={props.selected === 1 ? "#48409E" : "transparent"}
      border={props.selected === 1 ? "1px solid transparent" : "1px solid #FFBA53"}
      color={props.selected === 1 ? "white" : "#FFBA53"}
      borderRadius="1rem"
      _hover={{ bg: props.selected === 1 ? "#48409E" : "transparent" }}
    >
      {props.children}
    </Button>
  );
}
