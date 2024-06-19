import React, { createContext, PropsWithChildren, useState } from "react";

interface TicketContextProps {
  view: string;
  setTicketView: (value: string) => void;
}
export const TicketViewContext = createContext<TicketContextProps>({
  view: "kanban",
  setTicketView: () => {},
});

const TicketViewProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState("kanban");
  const setTicketView = (value: string) => {
    setView(value);
  };
  return (
    <TicketViewContext.Provider
      value={{
        view,
        setTicketView,
      }}
    >
      {children}
    </TicketViewContext.Provider>
  );
};

export default TicketViewProvider;
