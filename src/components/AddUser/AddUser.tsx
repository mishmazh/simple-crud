import React, { FC, useState } from "react";
import userList from "../../store/userList";
import classes from "./AddUser.module.scss";
import { v4 as uuid } from "uuid";

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
    userList.createUser({ name, location, id: uuid() });
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.AddUser}>
        <input
          type="text"
          value={name}
          onChange={changeNameHandler}
          placeholder="Enter the name..."
        />
        <input
          type="text"
          value={location}
          onChange={changeLocationHandler}
          placeholder="Enter the location..."
        />

        <button onClick={addUserHandler}>Add</button>
      </div>
    </div>
  );
};

export default AddUser;
