import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { Control, Controller, FieldErrors } from "react-hook-form";

import { format } from 'date-fns';
import { ptBR, } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { IoCalendarClearSharp } from "react-icons/io5";
import { ItemProps } from "../../types/item";

interface DatePickerProps {
  label: string;
  dataTestid?: string;
  placeholder?: string;
  control: Control<ItemProps>;
  errors: FieldErrors<ItemProps>
}

export function DatePicker({ label, control, dataTestid, placeholder, errors, ...rest }: DatePickerProps) {
  const [selected, setSelected] = useState<Date>();
  const [isLargerThanMD] = useMediaQuery('(max-width: 33.75rem)');

  const { onClose, isOpen, onOpen } = useDisclosure();

  function DateValidate(value?: string) {
    const timeZone = 'Europe/Lisbon';
    const dataAtual = new Date(value!).toLocaleString('en-US', { timeZone });
    if (selected || value) {
      return format(new Date(selected || dataAtual), 'dd/MM/yyyy', { locale: ptBR })
    } else {
      return ""
    }
  }

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement='bottom-start'>
      <PopoverTrigger>
        <Box>
          <Box width={isLargerThanMD ? "100%" : "17rem"}>
            <InputGroup>
              <InputRightElement pointerEvents="none" color="#48409E">
                <IoCalendarClearSharp />
              </InputRightElement>
              <Controller
                name="endDate"
                control={control}
                rules={{ required: "A data final é obrigatória" }}
                {...rest}
                defaultValue=""
                render={({ field: { value } }) => {
                  return (
                    <Input
                      placeholder={placeholder ?? "Selecione uma data"}
                      _placeholder={{ color: "#C4C4C4" }}
                      value={DateValidate(value)}
                      data-testid={dataTestid}
                      name={dataTestid}
                      type="text"
                      readOnly
                      border={errors.endDate && "2px solid #DD514B"}
                    />
                  )
                }
                }
              />
            </InputGroup>
            <FormLabel
              position="absolute"
              fontWeight="normal"
              fontSize="0.75rem"
              mt="-3.3rem"
              ml="0.5rem"
              color="#6F6F6F"
              bg="white"
              px="0.2rem"
            >
              {label}
            </FormLabel>
          </Box>
          {
            errors.endDate &&
            <Text color="#DD514B" fontSize="0.9rem">{errors.endDate?.message}</Text>
          }
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody p="0">
          <FormControl>
            <Controller
              name="endDate"
              control={control}
              {...rest}
              defaultValue=""
              render={({ field: { onChange } }) => {
                function onChangeValue(data: Date | undefined) {
                  onChange(format(new Date(data!), 'yyyy-MM-dd'));
                  setSelected(data);
                  onClose();
                }
                return (
                  <Flex align="center" justify="center">
                    <style>{css}</style>
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={onChangeValue}
                      locale={ptBR}
                      style={customStyle}
                      modifiersClassNames={{
                        selected: 'my-selected',
                        today: 'my-today'
                      }}
                      modifiersStyles={{
                        disabled: { fontSize: '75%' }
                      }}
                      captionLayout="dropdown"
                      fromYear={2017} toYear={2030}

                    />
                  </Flex>
                )
              }
              } />
          </FormControl>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}


const customStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  borderRadius: "10px",
  padding: "0.5rem"
}

const css = `
  .my-selected:not([disabled]) {
    font-weight: bold;
    border: 2px solid currentColor;
    background: black;
    color: white;
  }
  .my-selected:hover:not([disabled]) {
    border-color: gray;
    color: gray;
  }
  .my-today {
    font-weight: bold;
    font-size: 140%;
    color: black;
  }
`;
