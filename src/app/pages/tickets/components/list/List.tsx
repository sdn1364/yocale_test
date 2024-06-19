import React from "react";
import { Flex } from "@mantine/core";
import Row from "./compnents/Row";

const List = () => {
  const columns: string[] = ["Assigned", "Unassigned", "Completed"];
  return (
    <Flex justify="flex-start" p="md" gap="md" direction="column">
      {columns.map((col) => (
        <Row title={col} key={col} />
      ))}
    </Flex>
  );
};

export default List;
