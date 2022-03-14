import React, { FC } from "react";
import classes from "./Layout.module.scss";

export const Layout: FC<> = ({ children }) => {
    return (
        <div className={}>
            <main>{children}</main>
        </div>
    )
}