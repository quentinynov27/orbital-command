import { Routes, Route } from "react-router-dom";
import { FLEET, MISSIONS, MISSION_NEW, CONTROL, ALERTS } from "./routing/paths";
import { AppLayout } from "./components/AppLayout";
import { FleetPage } from "./pages/FleetPage";
import { MissionsPage } from "./pages/MissionsPage";
import { NewMissionPage } from "./pages/NewMissionPage";
import { ControlPage } from "./pages/ControlPage";
import { AlertsPage } from "./pages/AlertesPage";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { MissionDetailPage } from "./pages/MissionDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={FLEET} element={<FleetPage />} />
        <Route path={`${FLEET}/:vehicleId`} element={<VehicleDetailPage />} />
        <Route path={MISSION_NEW} element={<NewMissionPage />} />
        <Route path={MISSIONS} element={<MissionsPage />} />
        <Route path={`${MISSIONS}/:missionId`} element={<MissionDetailPage />} />
        <Route path={CONTROL} element={<ControlPage />} />
        <Route path={ALERTS} element={<AlertsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;