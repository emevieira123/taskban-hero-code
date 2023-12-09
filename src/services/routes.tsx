import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../shared/components/layouts/DefaultLayout";
import Quadro from "../pages/Quadro/Index";
import Lista from "../pages/Lista";
import Timeline from "../pages/Timeline";
import Calendario from "../pages/Calendario";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Quadro />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/calendario" element={<Calendario />} />
      </Route>
    </Routes>
  );
}
