import React from "react";
import { Paper, Stack, Text, Title } from "@mantine/core";

const Columns = () => {
  return (
    <Paper w={300} withBorder shadow="md" p="sm">
      <Title size="md" mb="md">
        Assigned
      </Title>
      <Stack>
        <Paper withBorder p="sm">
          <Text>Ticket name</Text>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default Columns;
