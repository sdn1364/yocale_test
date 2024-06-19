import React from "react";
import { Container, createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/app";
import '@mantine/core/styles.css';
import {RouterProvider} from "react-router-dom";
import router from "./router";

const root = createRoot(document.getElementById("root") as Container);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
    <App />
  </React.StrictMode>
);
