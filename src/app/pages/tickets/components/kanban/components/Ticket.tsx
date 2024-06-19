import React from "react";
import { ActionIcon, Avatar, Group, Paper, Stack, Text } from "@mantine/core";
import { Ticket as TicketType, User } from "../../../../../../entities";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../../../../api/api";
import { useHover } from "@mantine/hooks";
import { IconEdit, IconStatusChange, IconTrash } from "@tabler/icons-react";
import { closeAllModals, modals, openConfirmModal } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import TicketDetail from "../../../ticketsDetail/TicketDetail";

const Ticket = ({ ticket }: { ticket: TicketType }) => {
  const queryClient = useQueryClient();
  const { hovered, ref } = useHover();

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
  const deleteMutation = useMutation({
    mutationFn: () => api.delete("/tickets/" + ticket.id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tickets"] });
      notifications.show({
        title: "Ticket deleted",
        message: "Ticket successfully deleted",
      });
      closeAllModals();
    },
    onError: (error) => {
      // Handle the error accordingly
      notifications.show({
        title: "Something went wrong",
        message: "",
      });
      console.error("Error deleting ticket:", error);
    },
  });

  const editTicket = () => {
    modals.open({
      title: `Edit ticket number ${ticket?.number}`,
      children: <TicketDetail ticket={ticket} />,
    });
  };

  return (
    <Paper withBorder p="sm" ref={ref} pos="relative">
      {hovered && (
        <Group pos="absolute" top={5} right={15} gap={1}>
          <ActionIcon onClick={editTicket} variant="default" size="sm">
            <IconEdit size="1rem" strokeWidth={1} />
          </ActionIcon>
          <ActionIcon
            onClick={() =>
              openConfirmModal({
                title: "Delete this ticket",
                centered: true,
                children: (
                  <Text size="sm">
                    Are you sure you want to delete your profile? This action is
                    destructive and you will have to contact support to restore
                    your data.
                  </Text>
                ),
                labels: {
                  confirm: "Delete ticket",
                  cancel: "No don't delete it",
                },
                confirmProps: {
                  color: "red",
                  loading: deleteMutation.isPending,
                },
                onCancel: closeAllModals,
                onConfirm: () => deleteMutation.mutate(),
              })
            }
            variant="default"
            size="sm"
          >
            <IconTrash size="1rem" color="red" strokeWidth={1} />
          </ActionIcon>
        </Group>
      )}
      <Group justify="space-between" align="flex-end">
        <Stack gap={2}>
          <Text fz={10} c="dimmed">
            Ticket number:
          </Text>
          <Text test-id="ticket-number">{ticket.number}</Text>
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
