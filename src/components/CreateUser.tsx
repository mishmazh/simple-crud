import React, { FC, useState } from "react";
import userList from "../store/userList";
import { v4 as uuid } from "uuid";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Backdrop from "./UI/Backdrop";

interface AddUserProps {
  setDialog: (dialog: boolean) => void;
}

const CreateUser: FC<AddUserProps> = ({ setDialog }) => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const addUserHandler = () => {
    userList.createUser({ name, location, id: uuid() });
    setDialog(false);
  };

  return (
    <div className="create-user">
      <Backdrop onClick={() => setDialog(false)} />

      <div className="create-user__form">
        <Input
          value={name}
          onChange={changeNameHandler}
          placeholder="Enter the name..."
        />
        <Input
          value={location}
          onChange={changeLocationHandler}
          placeholder="Enter the location..."
        />

        <Button className="primary-btn" onClick={addUserHandler}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default CreateUser;
