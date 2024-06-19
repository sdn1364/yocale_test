import React from "react";
import {
  Center,
  Loader,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Ticket as TicketType } from "../../../../../../entities";
import { api } from "../../../../../../api/api";
import { IconExclamationCircle } from "@tabler/icons-react";
import Ticket from "./Ticket";

interface Props {
  title: string;
}
const Column = ({ title }: Props) => {
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
    <Paper w={300} withBorder shadow="md" p="sm">
      <Title size="md" mb="md">
        {title}
      </Title>
      {isLoading ? (
        <Center w={300} h={300}>
          <Loader />
        </Center>
      ) : (
        <ScrollArea h={400}>
          <Stack gap="sm">
            {tickets?.map((ticket, i) => {
              if (ticket.status === title.toLowerCase())
                return <Ticket ticket={ticket} key={title + " " + i} />;
            })}
          </Stack>
        </ScrollArea>
      )}
    </Paper>
  );
};

export default Column;
