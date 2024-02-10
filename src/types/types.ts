import { Brand } from "../helpers/Brand";

type Email = Brand<string, "email">;
type Password = Brand<string, "password">;
type User = Brand<
  {
    id: string;
    name: string;
    email: string;
  },
  "user"
>;

const user: User = {
  id: "121212",
  name: "john",
  email: "johndoe@gmail.com",
} as User;
const verifyPassword = (password: Password) => {};
