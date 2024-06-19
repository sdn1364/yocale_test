import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./app/app";
import { Home, TicketDetail, TicketList } from "./app/pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Home /> },
      { path: "/", element: <TicketList /> },
      { path: "/tickets/:id", element: <TicketDetail /> },
    ],
  },
]);
export default router;
