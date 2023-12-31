import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useContainersTasks } from '../../hooks/useContainersTasks';
import { useModal } from '../../hooks/useModal';
import { useSelectedPriority } from '../../hooks/useSelectPriority';
import { ItemProps } from '../../types/item';
import { FormModal } from '../FormModal';

export function ModalCreateTask({ isOpen }: { isOpen: boolean }) {
  const { containers, setContainers } = useContainersTasks();
  const { control, handleSubmit, reset, formState: { errors } } = useForm<ItemProps>();
  const { selected, setSelected } = useSelectedPriority();
  const { onClose } = useModal();
  const [isLargerThanMD] = useMediaQuery('(max-width: 33.75rem)');

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

  function onCancel() {
    onClose();
    reset();
    setSelected(undefined)
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancel} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#48409E">Novo Card</ModalHeader>
        <ModalBody>
          <FormModal control={control} errors={errors} />
        </ModalBody>

        <ModalFooter justifyContent={isLargerThanMD ? "center" : "end"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              border="1px solid #FF7979"
              color="#FF7979"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              borderRadius="1.25rem"
              mr={3}
              onClick={onCancel}
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
