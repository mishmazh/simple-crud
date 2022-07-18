import { FC } from "react";
import classes from "./Layout.module.scss";

export const Layout: FC = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};
