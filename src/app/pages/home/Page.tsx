import React from "react";
import { Anchor, Group, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Stack w={"100%"}>
      <Group px="md" mt="sm">
        <Anchor component={Link} to="/tickets">
          Tickets
        </Anchor>

        <Anchor component={Link} to="/users">
          Users
        </Anchor>
      </Group>
    </Stack>
  );
};

export default HomePage;
