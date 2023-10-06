import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Landing from "./components/landing/Landing.jsx";

const About = lazy(() => import("./components/about/About"));
const Jobs = lazy(() => import("./components/jobs/Jobs"));
const Quality = lazy(() => import("./components/quality/Quality"));
const History = lazy(() => import("./components/history/History"));
const Contact = lazy(() => import("./components/contact/Contact"));
const AllProducts = lazy(() =>
  import("./components/all-products/AllProducts"),
);
const Application = lazy(() =>
  import("./components/application-form/Application"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <AllProducts />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "quality",
        element: <Quality />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
  {
    path: "/application",
    element: <Application />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
