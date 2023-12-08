export interface ItemProps {
  title: string;
  description: string;
  endDate: string;
  priority: number | undefined;
}

export const defaultValues: ItemProps = {
  title: "",
  description: "",
  endDate: "",
  priority: undefined,
};
