import { Flex, Grid } from "@chakra-ui/react";
import { CardTask } from "./components/CardTask";
import { ContainerTasks } from "./components/ContainerTasks";
import { Header } from "./components/Header";
import { ModalCreateTask } from "./components/ModalCreateTask";
import { useModal } from "./hooks/useModal";
import { useContainersTasks } from "./hooks/useContainersTasks";
import { useDragMove } from "./hooks/useDragMove";
import { useDragEnd } from "./hooks/useDragEnd";
import { useActiveDragOverlay } from "./hooks/useActiveDragOverlay";
import { OverlayDrag } from "./components/OverlayDrag";

import {
  DndContext,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

export default function Quadro() {
  const { isOpen } = useModal();
  const { containers } = useContainersTasks();
  const { setActiveId } = useActiveDragOverlay();

  const { handleDragMove } = useDragMove();
  const { handleDragEnd } = useDragEnd(setActiveId);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  return (
    <Flex w="100%" bg="#F1F0FF" flexDirection="column">
      <Header />

      <Grid templateColumns="repeat(4, 1fr)" px="2rem" mt="5rem" gap="2.4rem">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={containers.map((i) => i.id)}>
            {
              containers.map((col) => (
                <ContainerTasks id={col.id} key={col.id} title={col.title} qtdTasks={col.items.length || 0}>
                  <SortableContext items={col.items.map((i) => i.id)}>
                    {
                      col.items.map((task) => (
                        <CardTask
                          key={task.id}
                          id={task.id}
                          title={task.title}
                          description={task.description}
                          endDate={task.endDate}
                          priority={task.priority}
                        />
                      ))
                    }
                  </SortableContext>
                </ContainerTasks>
              ))
            }
          </SortableContext>

          <OverlayDrag />
        </DndContext>
      </Grid>

      <ModalCreateTask isOpen={isOpen} />
    </Flex>
  );
}
