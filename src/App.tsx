import { FC } from "react";
import { Layout } from "./hoc/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserPage from "./pages/UserPage/UserPage";
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
        <Route path="/users" element={<UserPage />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default observer(App);
