import Search from "./Search";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { FC } from "react";
import Button from "./UI/Button";
import {IUser} from "../models/models";

interface UsersFormProps {
    users: IUser[];
    isDialog: boolean;
    setDialog: (isDialog: boolean) => void;
}

const UsersForm: FC<UsersFormProps> = ({ users,isDialog, setDialog }) => {
  return (
    <div className="users-form">
      <Search />
      <Button className="primary-btn" onClick={() => setDialog(true)}>Add user</Button>
      <UserList users={users} />
      {isDialog && <CreateUser setDialog={setDialog} />}
    </div>
  );
};

export default UsersForm;