import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const userSize = 30;
const ticketStatus = ["assigned", "completed", "unassigned"];

export const db = factory({
  user: {
    id: primaryKey(faker.datatype.number),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date.birthdate(),
    address: `${faker.address.street()},${faker.address.cityName()}, ${faker.address.country()}`,
    image: faker.image.avatar(),
  },
  ticket: {
    id: primaryKey(faker.datatype.number),
    userId: faker.datatype.number({ min: 1, max: userSize }),
    number: faker.random.alphaNumeric(8).toUpperCase(),
    status: ticketStatus[faker.datatype.number({ min: 0, max: 2 })],
  },
});
