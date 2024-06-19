import React, { useContext } from "react";
import { Stack } from "@mantine/core";
import TicketListControls from "./components/TicketListControls";
import TicketKanban from "./components/kanban/Kanban";
import TicketList from "./components/list/List";
import { TicketViewContext } from "./context/TicketViewContext";

const TicketsListPage = () => {
  const { view } = useContext(TicketViewContext);

  return (
    <Stack w="100%">
      <TicketListControls />
      {view === "kanban" ? <TicketKanban /> : <TicketList />}
    </Stack>
  );
};

export default TicketsListPage;
