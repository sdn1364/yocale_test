import React, { useContext } from "react";
import { Group, SegmentedControl, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import UserGroup from "../../../components/UserGroup";
import { TicketViewContext } from "../context/TicketViewContext";

const TicketListControls = () => {
  const { setTicketView } = useContext(TicketViewContext);
  return (
    <Group w="100%" justify="space-between" p="md" bg="gray.0">
      <Group>
        <TextInput
          placeholder="Search tickes..."
          leftSection={<IconSearch size="1rem" />}
        />
        <UserGroup />
      </Group>

      <SegmentedControl
        onChange={setTicketView}
        data={[
          { label: "Kanban", value: "kanban" },
          { label: "List", value: "list" },
        ]}
      />
    </Group>
  );
};

export default TicketListControls;
