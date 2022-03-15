import { FC } from "react";
import { IUser } from "../../../types/types";
import classes from "./UserItem.module.scss";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={classes.UserItem}>
      {user.name} проживает в {user.location}
    </div>
  );
};

export default UserItem;
