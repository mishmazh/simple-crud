import { FC } from "react";
import "./App.scss";
import { Layout } from "./hoc/Layout/Layout";
import AuthPage from "./components/AuthPage/AuthPage";
import UsersPage from "./components/UsersPage/UsersPage";
import { Routes, Route, Navigate } from "react-router-dom";
import auth from "./store/auth";
import { observer } from "mobx-react-lite";

// <Navigate to="/" />

const App: FC = () => {
  let routes = (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );

  if (!!auth.isAuth) {
    routes = (
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default observer(App);
