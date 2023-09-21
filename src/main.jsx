import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//*componente base.
import Home from "./routes/Home.jsx";

import About from "./routes/About.jsx";
import Projetos from "./routes/Projetos.jsx";
import Contato from "./routes/Contato.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //* componente filho.
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
