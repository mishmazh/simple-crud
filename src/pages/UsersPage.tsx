import { FC, useEffect, useState } from "react";
import users from "../store/users";
import UsersForm from "../components/UsersForm";
import {observer} from "mobx-react-lite";

const UsersPage: FC = () => {
  const [isDialog, setDialog] = useState<boolean>(false);

  useEffect(() => {
    users.fetchUsers();
  }, []);

  return (
    <UsersForm
      isDialog={isDialog}
      users={users.users}
      setDialog={setDialog}
    />
  );
};

export default observer(UsersPage);
