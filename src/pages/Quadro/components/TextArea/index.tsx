import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";
import { Control, FieldPath, FieldValues, Path, PathValue, UseFormRegister, useController } from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  control?: Control<T>;
  dataTestid?: string;
  placeholder?: string;
  rules?: Parameters<UseFormRegister<T>>[1];
}

function TextArea<T extends FieldValues>({
  name,
  label,
  control,
  dataTestid,
  rules,
  placeholder
}: TextAreaProps<T>) {
  const { field, fieldState } = useController({
    control,
    defaultValue: "" as PathValue<T, Path<T>>,
    name,
    rules
  })

  const fieldValue = field.value !== null ? String(field.value) : '';

  return (
    <FormControl isInvalid={fieldState.invalid}>
      <Textarea
        {...field}
        value={fieldValue}
        data-testid={dataTestid}
        placeholder={placeholder}
        _placeholder={{ color: "#C4C4C4" }}
        _focusVisible={{ outline: "none" }}
        resize="none"
      />
      <FormLabel
        position="absolute"
        fontWeight="normal"
        fontSize="0.75rem"
        mt="-0.75rem"
        top="0"
        ml="0.5rem"
        color="#6F6F6F"
        bg="white"
        px="0.2rem"
      >
        {label}
      </FormLabel>
      <FormErrorMessage>{fieldState?.error?.message}</FormErrorMessage>
    </FormControl>
  );
}

export default TextArea;
