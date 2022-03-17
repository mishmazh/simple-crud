import { FC, useState } from "react";
import userList from "../../../store/userList";
import { IUser } from "../../../types/types";
import classes from "./UserItem.module.scss";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [isEdit, setEdit] = useState<boolean>(false);

  const [name, setName] = useState<string>(user.name);
  const [location, setLocation] = useState<string>(user.location);

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const removeUserHandler = (id: string) => {
    userList.removeUser(id);
  };

  const saveUserHandler = () => {
    userList.editUser(name, location, user.id);
    setEdit(false);
  };

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

  const saveButton = (
    <button className={classes.save} onClick={saveUserHandler}>
      Сохранить
    </button>
  );

  const editButton = (
    <button className={classes.edit} onClick={() => setEdit(true)}>
      Редактировать
    </button>
  );

  return (
    <div className={classes.UserItem}>
      {isEdit ? editData : userData}

      <div className={classes.buttons}>
        {isEdit ? saveButton : editButton}

        <button
          className={classes.remove}
          onClick={() => removeUserHandler(user.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default UserItem;
