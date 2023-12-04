import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../shared/components/layouts/DefaultLayout";
import Quadro from "../pages/Quadro/Index";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Quadro />} />
            </Route>
        </Routes>
    );
}