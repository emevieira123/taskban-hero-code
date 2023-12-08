import { IconCalendario } from "../../../icons/IconCalendario";
import { IconQuadro } from "../../../icons/IconQuadro";
import { IconTimeline } from "../../../icons/IconTimeline";

export default function useItemsMenu() {
  const itemsMenu = [
    {
      id: 1,
      name: "Quadro",
      link: "/",
      icon: <IconQuadro />
    },
    {
      id: 2,
      name: "Lista",
      link: "/lista",
      icon: <IconCalendario />
    },
    {
      id: 3,
      name: "Timeline",
      link: "/timeline",
      icon: <IconTimeline />
    },
    {
      id: 4,
      name: "Calendário",
      link: "/calendario",
      icon: <IconCalendario />
    }
  ];

  return {
    itemsMenu
  }
}
