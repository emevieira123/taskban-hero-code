import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { useModal } from '../../hooks/useModal';
import { FormModal } from '../FormModal';
import { useForm } from 'react-hook-form';
import { useSelectedPriority } from '../../hooks/useSelectPriority';
import { ItemProps } from '../../types/item';
import { v4 as uuidv4 } from 'uuid';
import { useContainersTasks } from '../../hooks/useContainersTasks';

export function ModalCreateTask({ isOpen }: { isOpen: boolean }) {
  const { containers, setContainers } = useContainersTasks();
  const { control, handleSubmit, reset } = useForm<ItemProps>();
  const { selected, setSelected } = useSelectedPriority();
  const { onClose } = useModal();

  function onSubmit(data: ItemProps) {
    if (!data.title) return;
    const id = `item-${uuidv4()}`;
    const container = containers.find((item) => item.id === containers[0].id);
    if (!container) return;
    container.items.push({
      ...data,
      id,
      priority: selected!
    });
    setContainers([...containers]);
    onClose();
    reset();
    setSelected(undefined)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#48409E">Novo Card</ModalHeader>
        <ModalBody>
          <FormModal control={control} />
        </ModalBody>

        <ModalFooter>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              border="1px solid #FF7979"
              color="#FF7979"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              borderRadius="1.25rem"
              mr={3}
              onClick={onClose}
            >
              CANCELAR
            </Button>
            <Button
              bg="#48409E"
              _hover={{ bg: "#6B46C1" }}
              color="white"
              borderRadius="1.25rem"
              px="2.5rem"
              type="submit"
            >
              CRIAR
            </Button>
          </form>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
