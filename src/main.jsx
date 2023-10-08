import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Landing from "./components/landing/Landing.jsx";
import Wrapper from "./components/utility/Wrapper";
import Loading from "./components/utility/Loading";

const About = lazy(() => import("./components/about/About"));
const History = lazy(() => import("./components/history/History"));
const Jobs = lazy(() => import("./components/jobs/Jobs"));
const Quality = lazy(() => import("./components/quality/Quality"));
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
    element: <Wrapper comp={<Landing />} />,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
  {
    path: "/jobs",
    element: <Wrapper comp={<Jobs />} />,
  },
  {
    path: "/contact",
    element: <Wrapper comp={<Contact />} />,
  },
  {
    path: "/about",
    element: <Wrapper comp={<About />} />,
    children: [
      {
        path: "quality",
        element: <Quality />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/application",
    element: <Wrapper comp={<Application />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </main>
  </React.StrictMode>,
);
