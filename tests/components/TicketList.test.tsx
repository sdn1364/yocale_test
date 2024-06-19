import React from "react";
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AllProviders from "../../src/AllProviders";
import { TicketList } from "../../src/app/pages";

describe("Ticket list", () => {
  it("should render ticket list ", async () => {
    render(<TicketList />, { wrapper: AllProviders });

    const assignedList = await screen.findByRole("heading", {
      name: /assigned/i,
    });
    expect(assignedList).toBeInTheDocument();
  });
});
