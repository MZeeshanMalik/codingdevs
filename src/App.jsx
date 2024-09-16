import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import CompoundComponent from "./pages/Compoun-component";
import Wahtisreact from "./pages/React";
import ReactUpdates from "./pages/React-updates";
import Optimization from "./pages/Page-Optimization";
import ReactHooks from "./pages/ReactHooks";
import UseEffectHook from "./pages/useEffect";
import PrivacyPolicy from "./pages/PrivacyPolicy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/what-is-react",
        element: <Wahtisreact />,
      },
      {
        path: "/Compound-Component-pattern",
        element: <CompoundComponent />,
      },
      {
        path: "/react-updates",
        element: <ReactUpdates />,
      },
      {
        path: "/page-optimization-in-react",
        element: <Optimization />,
      },
      {
        path: "/react-hooks",
        element: <ReactHooks />,
      },
      {
        path: "/useEffect-hook",
        element: <UseEffectHook />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
