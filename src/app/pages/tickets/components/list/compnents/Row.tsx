import React, { useContext } from "react";
import { Center, Group, Loader, Paper, Stack, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Ticket as TicketType } from "../../../../../../entities";
import { api } from "../../../../../../api/api";
import { IconExclamationCircle } from "@tabler/icons-react";
import Ticket from "../../kanban/components/Ticket";
import { TicketViewContext } from "../../../context/TicketViewContext";
interface Props {
  title: string;
}
const Row = ({ title }: Props) => {
  const { selectedUser } = useContext(TicketViewContext);

  const {
    data: tickets,
    isLoading,
    error,
  } = useQuery<TicketType[], Error>({
    queryKey: ["tickets"],
    queryFn: () => api.get<TicketType[]>("/tickets").then((res) => res.data),
  });

  if (error)
    return (
      <Text c="red.5">
        <IconExclamationCircle /> Something went wrong
      </Text>
    );
  return (
    <Stack gap={0}>
      <Text bg="gray.1" w={100}>
        {title}
      </Text>
      <Paper withBorder p="sm">
        <Stack>
          {isLoading ? (
            <Center>
              <Loader />
            </Center>
          ) : (
            tickets
              ?.filter((t) => (selectedUser ? t.userId === selectedUser : t))
              ?.map((ticket, i) => {
                if (ticket.status === title.toLowerCase())
                  return <Ticket ticket={ticket} key={title + " " + i} />;
              })
          )}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Row;
