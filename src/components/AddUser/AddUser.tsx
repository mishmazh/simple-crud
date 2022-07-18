import React, { FC, useState } from "react";
import userList from "../../store/userList";
import classes from "./AddUser.module.scss";
import { v4 as uuid } from "uuid";

interface AddUserProps {
  setDialog: any;
}

const AddUser: FC<AddUserProps> = ({ setDialog }) => {
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
    <div className={classes.addUser}>
      <div className={classes.backdrop} onClick={() => setDialog(false)}>
        <div className={classes.AddUserForm}>
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

          <button className="btn primary-btn" onClick={addUserHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
