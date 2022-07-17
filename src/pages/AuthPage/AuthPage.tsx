import {ChangeEvent, FC, FormEvent, useState} from "react";
import classes from "./AuthPage.module.scss";
import auth from "../../store/auth";
import { observer } from "mobx-react-lite";

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>("admin@gmail.com");
  const [password, setPassword] = useState<string>("admin");

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    auth.authAttempt(email, password);
  };

  return (
    <div className={classes.AuthPage}>
      <form className={classes.AuthForm} onSubmit={loginHandler}>
        <div className={classes.title}>Authorization</div>

        <input
          type="email"
          value={email}
          onChange={setEmailHandler}
          placeholder="Введите email"
        />
        <input
          type="password"
          value={password}
          onChange={setPasswordHandler}
          placeholder="Введите пароль"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default observer(AuthPage);
