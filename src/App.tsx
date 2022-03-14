import React from "react";
import "./App.scss";
import { Layout } from "./hoc/Layout/Layout";
import { AuthPage } from "./components/AuthPage/AuthPage"
import { UsersPage } from "./components/UsersPage/UsersPage"

function App() {
  return (
    <Layout>
      <AuthPage />
      <UsersPage />
    </Layout>
  );
}

export default App;
