import { ChangeEvent, FC, FormEvent, useState } from "react";
import auth from "../store/auth";
import { observer } from "mobx-react-lite";
import AuthForm from "../components/AuthForm";

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>("admin@gmail.com");
  const [password, setPassword] = useState<string>("admin");

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    auth.authAttempt(email, password);
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

export default observer(AuthPage);
