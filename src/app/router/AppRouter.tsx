import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

/** Lazy-loaded pages */
const AuthPage = lazy(() =>
  import("@/pages/auth").then((m) => ({ default: m.AuthPage })),
);
const DashboardPage = lazy(() =>
  import("@/pages/dashboard").then((m) => ({ default: m.DashboardPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((m) => ({ default: m.NotFoundPage })),
);

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Navigate to={ROUTES.dashboard} replace />,
  },
  {
    path: ROUTES.auth,
    element: <AuthPage />,
  },
  {
    path: ROUTES.dashboard,
    element: <DashboardPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
