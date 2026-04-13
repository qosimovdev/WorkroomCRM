import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddNewProject from "../pages/Projects/AddNewProject";
import ProjectsCollect from "../pages/Projects/ProjectsCollect";
import ProjectsMainPage from "../pages/AddProjects/ProjectsMainPage";
import MainVac from "../pages/Vacations/MainVac";
import MyProfile from "../pages/MyProfile/MyProfile";
import InfoPortalMain from "../pages/Info/InfoPortalMain";
import { Loader } from "lucide-react";

const Calendar = lazy(() => import("../pages/calendar/Calendar"));
const Employees = lazy(() => import("../pages/Employees/Employees"));
function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-page" element={<ProjectsMainPage />} />
        <Route path="/projects/*" element={<ProjectsCollect />} />
        <Route path="/projects/newProject" element={<AddNewProject />} />

        <Route
          path="/employes"
          element={
            <Suspense
              fallback={<Loader className="animate-spin mx-auto mt-10" />}
            >
              <Employees />
            </Suspense>
          }
        />

        <Route
          path="/calendar"
          element={
            <Suspense
              fallback={<Loader className="animate-spin mx-auto mt-10" />}
            >
              <Calendar />
            </Suspense>
          }
        />

        <Route path="/vacations/*" element={<MainVac />} />
        <Route path="/info-portal/*" element={<InfoPortalMain />} />
        <Route path="/my-profile/*" element={<MyProfile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
