import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./app/app";
import { TicketList } from "./app/pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Home /> },
      { path: "/", element: <TicketList /> },
    ],
  },
]);
export default router;
