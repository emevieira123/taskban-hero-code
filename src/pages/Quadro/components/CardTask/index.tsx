import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Flex, Text } from "@chakra-ui/react";
import { IconRelogio } from "../../../../shared/icons/IconRelogio";
import { format, isBefore, parseISO } from "date-fns";
import { FaRegCheckCircle } from "react-icons/fa";

interface CardTaskProps {
  id: UniqueIdentifier;
  title: string;
  description?: string;
  endDate?: string;
  priority?: number;
  statusDone?: boolean;
}

export function CardTask(props: CardTaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.id,
    data: {
      type: "item",
    },
  });

  function colorPriority(value: number) {
    switch (value) {
      case 0:
        return "#2BA700"
      case 1: return "#FFBA53"
      default:
        return "white"
    }
  }

  const dataFinalizacao = parseISO(props.endDate!);
  const dataAtual = new Date();

  return (
    <Flex
      borderRadius="10px"
      bg="white"
      boxShadow="0px 10px 10px 0px rgba(0, 0, 0, 0.05)"
      flexDirection="column"
      p="1rem"
      color="#6F6F6F"
      cursor="grab"
      opacity={isDragging ? "50" : ""}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
    >
      <Text fontWeight="bold" fontSize="20px">{props.title}</Text>
      <Text fontSize="14px" mt="1rem">
        {props.description}
      </Text>

      {
        props.statusDone
          ? (
            <Flex align="center" mt="1.25rem" color="#2BA700" gap={2}>
              <FaRegCheckCircle size="20" />
              <Text>Finalizado</Text>
            </Flex>
          )
          : (
            <Flex align="center" justify="space-between" mt="1.25rem">
              <Flex
                color={
                  isBefore(dataFinalizacao, dataAtual) ? "#FF7979" : ""
                }
                gap={2}
              >
                <IconRelogio />
                <Text>{format(dataFinalizacao, 'dd/MM/yyyy')}</Text>
              </Flex>

              <Text
                px="0.5rem"
                border={`1px solid ${props.priority !== 2 && colorPriority(props.priority!)}`}
                color={colorPriority(props.priority!)}
                bg={props.priority === 2 ? "#FF7979" : ""}
                borderRadius="1.25rem"
                fontWeight="bold"
              >
                {
                  props.priority === 0
                    ? "LOW"
                    : (
                      props.priority === 1
                        ? "MEDIUM"
                        : "HIGH"
                    )
                }
              </Text>
            </Flex>
          )
      }

    </Flex>
  );
}
