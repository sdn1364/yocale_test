import React from "react";
import "./app.css";
import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { QueryClient } from "@tanstack/react-query";

import AllProviders from "../AllProviders";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <AllProviders>
      <Outlet />
    </AllProviders>
  );
};

export default App;
