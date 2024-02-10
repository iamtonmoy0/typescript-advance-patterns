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
    email: values.email as Email,
    password: values.password as Password,
  };
};

const createUserApi = (values: { email: Email; password: Password }) => {
  // the api call goes here
};

const onSubmitHandler = (values: { email: string; password: string }) => {};
