import React, { FC, useState } from "react";
import userList from "../../store/userList";
import classes from "./AddUser.module.scss";

const AddUser: FC = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const addUserHandler = () => {
    userList.addUser(name, location);
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

      <button onClick={addUserHandler}>Добавить</button>
    </div>
  );
};

export default AddUser;
