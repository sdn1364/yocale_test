export type User = {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  image: string;
};

export type Ticket = {
  id: number;
  userId?: number;
  number: string;
  status: string;
};
