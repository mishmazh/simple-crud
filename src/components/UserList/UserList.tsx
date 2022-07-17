import { observer } from "mobx-react-lite";
import { FC } from "react";
import { IUser } from "../../models/models";
import UserItem from "./UserItem/UserItem";
import classes from "./UserList.module.scss";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={classes.UserList}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default observer(UserList);
