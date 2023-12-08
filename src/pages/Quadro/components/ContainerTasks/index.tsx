import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Flex, Text } from "@chakra-ui/react";

interface ContainerTasksProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title: string;
  qtdTasks?: number;
}

export function ContainerTasks(props: ContainerTasksProps) {
  const {
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.id,
    data: {
      type: 'container',
    },
  });

  return (
    <div>
      <Flex
        ref={setNodeRef}
        style={{
          transition,
          transform: CSS.Translate.toString(transform),
        }}
        p="0.5rem"
        bg="#F2F2F2"
        borderRadius="1.25rem"
        boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.10)"
        flexDirection="column"
        opacity={isDragging ? "50" : ""}
      >
        <Flex color="#6F6F6F" gap={1} mb="1rem">
          <Text fontWeight="bold">{props.title}</Text>
          <Text>({props.qtdTasks})</Text>
        </Flex>

        <Flex flexDirection="column" gap={4}>
          {props.children}
        </Flex>
      </Flex>
    </div>
  );
}
