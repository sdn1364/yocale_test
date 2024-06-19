import { db } from "./db";

export const handlers = [
  ...db.user.toHandlers("rest"),
  ...db.ticket.toHandlers("rest"),
];
