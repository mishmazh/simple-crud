import React, { FC, useState } from "react";
import classes from "./AuthPage.module.scss";
import auth from "../../store/auth";
import { observer } from "mobx-react-lite";

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    auth.authAttempt(email, password);
  };

  return (
    <div className={classes.AuthPage}>
      <div className={classes.AuthForm}>
        <div className={classes.title}>Авторизация</div>

        <input
          type="email"
          value={email}
          onChange={changeEmailHandler}
          placeholder="Введите email"
        />
        <input
          type="password"
          value={password}
          onChange={changePasswordHandler}
          placeholder="Введите пароль"
        />

        <button onClick={loginHandler}>Войти</button>
      </div>
    </div>
  );
};

export default observer(AuthPage);
