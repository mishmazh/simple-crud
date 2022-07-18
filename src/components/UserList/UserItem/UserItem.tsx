import React, { FC, useState } from "react";
import userList from "../../../store/userList";
import { IUser } from "../../../models/models";
import classes from "./UserItem.module.scss";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [isEdit, setEdit] = useState<boolean>(false);

  const [name, setName] = useState<string>(user.name);
  const [location, setLocation] = useState<string>(user.location);

  // ---------- inputs ---------- //
  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  // ---------- buttons ---------- //
  const removeUserHandler = (id: string) => {
    userList.deleteUser(id);
  };

  const saveUserHandler = () => {
    userList.updateUser({ name, location, id: user.id });
    setEdit(false);
  };

  // ---------- JSX в зависимости от кнопки ---------- //
  const userData = (
    <div>
      <div className={classes.name}>{user.name}</div>
      <div>Местоположение: {user.location}</div>
    </div>
  );

  const editData = (
    <div className={classes.inputs}>
      <input
        type="text"
        value={name}
        onChange={changeNameHandler}
        placeholder="Имя..."
      />
      <input
        type="text"
        value={location}
        onChange={changeLocationHandler}
        placeholder="Местоположение..."
      />
    </div>
  );

  const editButton = (
    <button className="btn primary-btn" onClick={() => setEdit(true)}>
      Редактировать
    </button>
  );

  const saveButton = (
    <button className="btn primary-btn" onClick={saveUserHandler}>
      Сохранить
    </button>
  );
  // --------------------------------------------- //

  return (
    <div className={classes.UserItem}>
      {isEdit ? editData : userData}

      <div className={classes.buttons}>
        {isEdit ? saveButton : editButton}

        <button
          className="btn secondary-btn"
          onClick={() => removeUserHandler(user.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default UserItem;
