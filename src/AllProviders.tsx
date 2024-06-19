import React, { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import TicketViewProvider from "./app/pages/tickets/context/TicketViewContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/app";

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />

        <ModalsProvider>
          <TicketViewProvider>{children}</TicketViewProvider>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default AllProviders;
