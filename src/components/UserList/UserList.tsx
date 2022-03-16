import { observer } from "mobx-react-lite";
import { FC } from "react";
import { IUser } from "../../types/types";
import UserItem from "./UserItem/UserItem";
import classes from "./UserList.module.scss";

interface UserListProps {
  users: IUser[];
  removeHandler: (e: number) => void;
}

const UserList: FC<UserListProps> = ({ users, removeHandler }) => {
  return (
    <div className={classes.UserList}>
      {users.map((user) => (
        <UserItem user={user} removeHandler={removeHandler} key={user.id} />
      ))}
    </div>
  );
};

export default observer(UserList);
