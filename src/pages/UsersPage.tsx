import { FC, useEffect, useState } from "react";
import userList from "../store/userList";
import UsersForm from "../components/UsersForm";
import {observer} from "mobx-react-lite";

const UsersPage: FC = () => {
  const [isDialog, setDialog] = useState<boolean>(false);

  useEffect(() => {
    userList.fetchUsers();
  }, []);

  return (
    <UsersForm
      isDialog={isDialog}
      users={userList.users}
      setDialog={setDialog}
    />
  );
};

export default observer(UsersPage);
