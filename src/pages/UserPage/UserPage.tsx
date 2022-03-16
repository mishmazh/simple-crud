import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import userList from "../../store/userList";
import AddUser from "../../components/AddUser/AddUser";
import UserList from "../../components/UserList/UserList";
import classes from "./UserPage.module.scss";

const UserPage: FC = () => {
  useEffect(() => {
    userList.getUsers();
  }, []);

  // const addHandler = () => {

  // }

  const removeHandler = (id: number) => {
    userList.removeUser(id);
  };

  return (
    <div className={classes.UserPage}>
      <UserList users={userList.users} removeHandler={removeHandler} />
      <AddUser users={userList.users} />
    </div>
  );
};

export default observer(UserPage);
