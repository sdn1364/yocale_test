import React from "react";
import "./app.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TicketViewProvider from "./pages/tickets/context/TicketViewContext";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />

        <ModalsProvider>
          <TicketViewProvider>
            <Outlet />
          </TicketViewProvider>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
