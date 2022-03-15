import { FC } from "react";
import classes from "./Layout.module.scss";

export const Layout: FC = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <main>{children}</main>
    </div>
  );
};
