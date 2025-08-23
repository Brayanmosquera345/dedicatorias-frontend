import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import MianLayout from "../layouts/MianLayout";
import CreateDedicationLayout from "../layouts/CreateDedicationLayout";
import CreateMessagePage from "../pages/CreateMessagePage";
import SelectedSongPage from "../pages/SelectedSongPage";
import SelectedImagenPage from "../pages/SelectedImagenPage";
import PreviewPage from "../pages/PreviewPage";
import CopyUrlPage from "../pages/CopyUrlPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/crear-dedicatoria",
    element: <CreateDedicationLayout />,
    children: [
      {
        index: true,
        element: <CreateMessagePage />,
      },
      {
        path: "cancion",
        element: <SelectedSongPage />,
      },
      {
        path: "imagen",
        element: <SelectedImagenPage />,
      },
      {
        path: "vista-previa",
        element: <PreviewPage />,
      },
      {
        path: "copia-url",
        element: <CopyUrlPage />,
      },
    ],
  }
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}