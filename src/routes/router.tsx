import RootLayout from "@/layout/root-layout";
import Dashboard from "@/pages/dashboard/page";
import Songs from "@/pages/songs/page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "songs", element: <Songs /> },
    ],
  },
]);
