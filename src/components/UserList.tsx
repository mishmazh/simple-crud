import { observer } from "mobx-react-lite";
import { FC } from "react";
import { IUser } from "../models/models";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default observer(UserList);
