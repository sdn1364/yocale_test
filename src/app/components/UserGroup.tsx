import React from "react";
import { Avatar, Group, Loader, Text, Menu, ScrollArea } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../entities";
import { api } from "../../api/api";

const UserGroup = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: () => api.get<User[]>("/users").then((res) => res.data),
  });
  if (error) return error.message;
  if (isLoading) return <Loader type="dots" />;
  return (
    <Menu>
      <Menu.Target>
        <Avatar.Group>
          {users?.map((user, i) => {
            if (i < 3) {
              return <Avatar key={user?.id} src={user?.image} />;
            }
          })}

          <Avatar>{users!.length - 3}</Avatar>
        </Avatar.Group>
      </Menu.Target>
      <Menu.Dropdown>
        <ScrollArea h={200}>
          {users?.map((user) => (
            <Menu.Item key={"menu" + user?.id}>
              <Group>
                <Avatar size="sm" src={user?.image} />{" "}
                <Text>
                  {user?.firstName} {user?.lastName}
                </Text>
              </Group>
            </Menu.Item>
          ))}
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserGroup;
