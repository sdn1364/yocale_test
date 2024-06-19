import React from "react";
import { Flex } from "@mantine/core";
import Column from "./components/Column";

const Kanban = () => {
  const columns: string[] = ["Assigned", "Unassigned", "Completed"];
  return (
    <Flex justify="flex-start" p="md" gap="md">
      {columns.map((col) => (
        <Column title={col} key={col} />
      ))}
    </Flex>
  );
};

export default Kanban;
