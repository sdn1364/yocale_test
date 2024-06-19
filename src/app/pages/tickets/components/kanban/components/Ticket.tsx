import React from "react";
import { Avatar, Group, Paper, Stack, Text } from "@mantine/core";
import { Ticket as TicketType, User } from "../../../../../../entities";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../../../api/api";

const Ticket = ({ ticket }: { ticket: TicketType }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User, Error>({
    queryKey: ["ticketUser", ticket.userId],
    queryFn: () =>
      api.get<User>("/users/" + ticket.userId).then((res) => res.data),
    enabled: !!ticket.userId,
  });

  return (
    <Paper withBorder p="sm">
      <Group justify="space-between" align="flex-end">
        <Stack gap={2}>
          <Text fz={10} c="dimmed">
            Ticket number:
          </Text>
          <Text>{ticket.number}</Text>
        </Stack>
        {!error && !isLoading ? (
          <Avatar size="sm" src={user?.image} alt={user?.firstName} />
        ) : (
          <Avatar size="sm" />
        )}
      </Group>
    </Paper>
  );
};

export default Ticket;
