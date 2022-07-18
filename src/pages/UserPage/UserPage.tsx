import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import userList from "../../store/userList";
import AddUser from "../../components/AddUser/AddUser";
import UserList from "../../components/UserList/UserList";
import classes from "./UserPage.module.scss";
import Search from "../../components/Search/Search";

const UserPage: FC = () => {
  const [isDialog, setDialog] = useState<boolean>(false);

  useEffect(() => {
    userList.fetchUsers();
  }, []);

  return (
    <div className={classes.UserPage}>
      <Search />
      <button onClick={() => setDialog(true)}>Add user</button>
      <UserList users={userList.users} />
      {isDialog && <AddUser setDialog={setDialog} />}
    </div>
  );
};

export default observer(UserPage);
