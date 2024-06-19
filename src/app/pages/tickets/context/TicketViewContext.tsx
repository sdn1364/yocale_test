import React, { createContext, PropsWithChildren, useState } from "react";

interface TicketContextProps {
  view: string;
  selectedUser: number | null;
  setTicketView: (value: string) => void;
  handleSelectedUser: (userId: number) => void;
}

export const TicketViewContext = createContext<TicketContextProps>({
  view: "kanban",
  selectedUser: null,
  setTicketView: () => {},
  handleSelectedUser: () => {},
});

const TicketViewProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState("kanban");
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const setTicketView = (value: string) => {
    setView(value);
  };
  const handleSelectedUser = (userId: number) => {
    setSelectedUser(userId);
  };
  return (
    <TicketViewContext.Provider
      value={{
        view,
        selectedUser,
        handleSelectedUser,
        setTicketView,
      }}
    >
      {children}
    </TicketViewContext.Provider>
  );
};

export default TicketViewProvider;
