import { FC } from "react";
import { Layout } from "./hoc/Layout";
import AuthPage from "./pages/AuthPage";
import UsersPage from "./pages/UsersPage";
import { Routes, Route, Navigate } from "react-router-dom";
import auth from "./store/auth";
import { observer } from "mobx-react-lite";
import "./style.css";

const App: FC = () => {
  let routes = (
    <Routes>
      <Route path="/users" element={<Navigate to="/" />} />
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );

  if (auth.isAuth) {
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
