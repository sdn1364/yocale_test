import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Ticket, User } from "../../../../entities";
import { api } from "../../../../api/api";
import { Button, Group, Select, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

const TicketDetail = ({ ticket }: { ticket: Ticket }) => {
  const queryClient = useQueryClient();
  const { data: users } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: () => api.get<User[]>("/users").then((res) => res.data),
  });

  const form = useForm({
    initialValues: {
      userId: `${ticket?.userId}`,
      status: `${ticket?.status}`,
    },
  });
  const editTicketMutation = useMutation({
    mutationFn: (values) => api.patch("/tickets/" + ticket.id, values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tickets"] });
      Notifications.show({
        title: "Ticket edited",
        message: "",
        color: "green.5",
      });

      closeAllModals();
    },
    onError: () => {
      Notifications.show({
        title: "Error editing tickets",
        message: "",
        color: "red.5",
      });
    },
  });

  const submitEditTicket = (values: any) => {
    editTicketMutation.mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(submitEditTicket)}>
      <Stack>
        <Select
          label="Assignee"
          {...form.getInputProps("userId")}
          data={
            users
              ? users.map((user) => ({
                  label: `${user?.firstName} ${user?.lastName}`,
                  value: `${user?.id}`,
                }))
              : []
          }
        />
        <Select
          label="status"
          {...form.getInputProps("status")}
          data={[
            { label: "Assigned", value: "assigned" },
            { label: "Unassigned", value: "unassigned" },
            { label: "Completed", value: "completed" },
          ]}
        />
        <Group justify="right">
          <Button onClick={() => closeAllModals()} variant="default">
            close
          </Button>
          <Button type="submit" loading={editTicketMutation.isPending}>
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default TicketDetail;
