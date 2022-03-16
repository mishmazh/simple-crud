import React, { FC, useState } from "react";
import userList from "../../store/userList";
import { IUser } from "../../types/types";
import classes from "./AddUser.module.scss";

interface AddUserProps {
  users: IUser[];
}

const AddUser: FC<AddUserProps> = ({ users }) => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className={classes.AddUser}>
      <input
        type="text"
        value={name}
        onChange={changeNameHandler}
        placeholder="Введите имя..."
      />
      <input
        type="text"
        value={location}
        onChange={changeLocationHandler}
        placeholder="Введите местоположение..."
      />

      <button
        onClick={() =>
          userList.addUser(name, location, users[users.length - 1].id + 1)
        }
      >
        Добавить юзера
      </button>
    </div>
  );
};

export default AddUser;
