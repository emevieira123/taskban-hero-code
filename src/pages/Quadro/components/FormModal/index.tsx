import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Control, FieldErrors } from "react-hook-form";
import { DatePicker } from "../DatePicker";
import Input from "../Input";
import { PriorityContainer } from "../PriorityContainer";
import TextArea from "../TextArea";
import { ItemProps } from "../../types/item";

interface FormProps {
  control: Control<ItemProps>;
  errors: FieldErrors<ItemProps>
}

export function FormModal({ control, errors }: FormProps) {
  const [isLargerThanMD] = useMediaQuery('(max-width: 33.75rem)');

  return (
    <Flex flexDirection="column" gap={6}>
      <Input
        name="title"
        label="Titulo da Task"
        control={control}
        placeholder="Digite aqui o titulo da task"
        rules={{ required: "O titulo é obrigatório" }}
      />
      <TextArea
        name="description"
        label="Descrição"
        placeholder="Digite a descrição"
        control={control}
        rules={{ required: "A descrição é obrigatória" }}
      />
      <Flex align="center" justify="space-between" gap={10} flexDirection={isLargerThanMD ? "column" : "initial"}>
        <DatePicker
          label="Data final"
          control={control}
          placeholder="Selecione a data de entrega"
          errors={errors}
        />

        <PriorityContainer />
      </Flex>
    </Flex>
  )
}
