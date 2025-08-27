import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load de páginas
const LandingPage = lazy(() => import("../pages/LandingPage"));
const MianLayout = lazy(() => import("../layouts/MianLayout"));
const CreateDedicationLayout = lazy(() => import("../layouts/CreateDedicationLayout"));
const CreateMessagePage = lazy(() => import("../pages/CreateMessagePage"));
const SelectedSongPage = lazy(() => import("../pages/SelectedSong/SelectedSongPage"));
const SelectedImagenPage = lazy(() => import("../pages/SelectedImage/SelectedImagenPage"));
const PreviewPage = lazy(() => import("../pages/PreviewPage"));
const CopyUrlPage = lazy(() => import("../pages/CopyUrlPage"));
const DedicationPage = lazy(() => import("../pages/DedicationPage"));
import LoaderIcon from "../components/icons/LoaderIcon";

// Componente wrapper para Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<div className="flex items-center justify-center h-screen text-paragraph bg-background">
      <LoaderIcon size={48} />
    </div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(MianLayout),
    children: [
      {
        index: true,
        element: withSuspense(LandingPage),
      },
    ],
  },
  {
    path: "/crear-dedicatoria",
    element: withSuspense(CreateDedicationLayout),
    children: [
      {
        index: true,
        element: withSuspense(CreateMessagePage),
      },
      {
        path: "cancion",
        element: withSuspense(SelectedSongPage),
      },
      {
        path: "imagen",
        element: withSuspense(SelectedImagenPage),
      },
      {
        path: "vista-previa",
        element: withSuspense(PreviewPage),
      },
      {
        path: "copia-url",
        element: withSuspense(CopyUrlPage),
      },
    ],
  },
  {
    path: "/dedicatoria/:id",
    element: withSuspense(DedicationPage),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
