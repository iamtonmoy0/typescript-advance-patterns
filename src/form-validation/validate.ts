import { Brand } from "../helpers/Brand";

type Email = Brand<string, "email">;
type Password = Brand<string, "password">;

export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes("@")) {
    throw new Error("Email invalid");
  }
  if (values.password.length > 8) {
    throw new Error("password is short");
  }
  return {
    email: values.email,
    password: values.password,
  };
};

const createUserApi = (values: { email: string; password: string }) => {
  // the api call goes here
};
