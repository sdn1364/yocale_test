import React from "react";
import { render, screen } from "@testing-library/react";
import AllProviders from "../../src/AllProviders";
import { TicketList } from "../../src/app/pages";
import { db } from "../mock/db";
import { server } from "../mock/server";
import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom/vitest";

describe("Ticket list", () => {
  it("should render ticket list with tickets ", async () => {
    const ticket = db.ticket.create();
    server.use(
      http.get("/tickets", () => {
        return HttpResponse.json(ticket);
      })
    );

    render(<TicketList />, { wrapper: AllProviders });

    const ticketNumber = await screen.findByTestId("ticket-number");
    expect(ticketNumber).toBeInTheDocument();
    expect(ticketNumber).toHaveTextContent(ticket.number.toString());
  });
});
