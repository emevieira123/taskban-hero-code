import { DragOverlay } from "@dnd-kit/core";
import { useActiveDragOverlay } from "../../hooks/useActiveDragOverlay";
import { CardTask } from "../CardTask";
import { ContainerTasks } from "../ContainerTasks";
import { useDragOverlay } from "../../hooks/useDragOverlay";

export function OverlayDrag() {
  const { activeId } = useActiveDragOverlay();
  const {
    findItemTitle,
    findItemDescription,
    findItemEndDate,
    findItemPriority,
    findContainerTitle,
    findContainerItems
  } = useDragOverlay();

  return (
    <DragOverlay adjustScale={false}>
      {activeId && activeId.toString().includes("item") && (
        <CardTask
          id={activeId}
          title={findItemTitle(activeId)}
          description={findItemDescription(activeId)}
          endDate={findItemEndDate(activeId)}
          priority={Number(findItemPriority(activeId))}
        />
      )}
      {activeId && activeId.toString().includes("container") && (
        <ContainerTasks
          id={activeId}
          title={findContainerTitle(activeId)}
          qtdTasks={findContainerItems(activeId).length}
        >
          {findContainerItems(activeId).map((i) => (
            <CardTask
              key={i.id}
              title={i.title} id={i.id}
              description={i.description}
              endDate={i.endDate}
              priority={i.priority}
            />
          ))}
        </ContainerTasks>
      )}
    </DragOverlay>
  );
}
