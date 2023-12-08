import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonLowProps extends ButtonProps {
  children: React.ReactNode;
  selected?: number;
}

export function ButtonLow(props: ButtonLowProps) {
  return (
    <Button
      {...props}
      h="2rem"
      fontSize="0.75rem"
      bg={props.selected === 0 ? "#48409E" : "transparent"}
      border={props.selected === 0 ? "1px solid transparent" : "1px solid #2BA700"}
      color={props.selected === 0 ? "white" : "#2BA700"}
      borderRadius="1rem"
      _hover={{ bg: props.selected === 0 ? "#48409E" : "transparent" }}
    >
      {props.children}
    </Button>
  );
}
