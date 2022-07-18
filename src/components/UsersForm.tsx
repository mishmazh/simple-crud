import Search from "./Search/Search";
import UserList from "./UserList";
import userList from "../store/userList";
import AddUser from "./AddUser/AddUser";
import { FC } from "react";
import {observer} from "mobx-react-lite";

interface UsersFormProps {
    isDialog: boolean;
    setDialog: (isDialog: boolean) => void;
}

const UsersForm: FC<UsersFormProps> = ({ isDialog, setDialog }) => {
  return (
    <div className="users-form">
      <Search />
      <button className="btn primary-btn" onClick={() => setDialog(true)}>Add user</button>
      <UserList users={userList.users} />
      {isDialog && <AddUser setDialog={setDialog} />}
    </div>
  );
};

export default observer(UsersForm);