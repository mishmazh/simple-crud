import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import userList from "../../store/userList";
import UserItem from "./UserItem/UserItem";
import classes from "./UsersPage.module.scss";

const UsersPage: FC = () => {
  useEffect(() => {
    userList.getUsers();
  }, []);

  return (
    <div className={classes.UsersPage}>
      {userList.users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default observer(UsersPage);
