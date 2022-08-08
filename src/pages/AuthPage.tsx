import { ChangeEvent, FC, FormEvent, useState } from "react";
import auth from "../store/auth";
import AuthForm from "../components/AuthForm";

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    auth.login(email, password);
  };

  return (
    <AuthForm
      email={email}
      password={password}
      setEmailHandler={setEmailHandler}
      setPasswordHandler={setPasswordHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default AuthPage;
