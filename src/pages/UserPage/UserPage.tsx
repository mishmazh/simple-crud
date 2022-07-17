import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import userList from "../../store/userList";
import AddUser from "../../components/AddUser/AddUser";
import UserList from "../../components/UserList/UserList";
import classes from "./UserPage.module.scss";
import Search from "../../components/Search/Search";

const UserPage: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    userList.fetchUsers();
  }, []);

  return (
    <div className={classes.UserPage}>
      <Search />
      <button onClick={() => setToggle(true)}>Add user</button>
      <UserList users={userList.users} />
      {toggle && <AddUser />}
    </div>
  );
};

export default observer(UserPage);
