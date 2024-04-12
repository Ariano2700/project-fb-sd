import { ChangeEvent, FormEvent } from "react";
export type Auth = {
  email: string;
  password: string;
};

export type ErrorType = string | null

export type InputLoginRegisterProps = {
  placeholder: string;
  type: "text" | "email" | "password";
  name: string;
  icon?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export type handleChangeType = (e: ChangeEvent<HTMLInputElement>) => void;
export type handleSubmitType = (e: FormEvent<HTMLFormElement>) => void;