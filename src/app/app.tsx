import React from "react";
import "./app.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TicketViewProvider from "./pages/tickets/context/TicketViewContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <TicketViewProvider>
          <Outlet />
        </TicketViewProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
