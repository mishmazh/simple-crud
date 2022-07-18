import { FC, useEffect, useState } from "react";
import userList from "../store/userList";
import UsersForm from "../components/UsersForm";

const UsersPage: FC = () => {
  const [isDialog, setDialog] = useState<boolean>(false);

  useEffect(() => {
    userList.fetchUsers();
  }, []);

  return <UsersForm isDialog={isDialog} setDialog={setDialog}/>
};

export default UsersPage;
