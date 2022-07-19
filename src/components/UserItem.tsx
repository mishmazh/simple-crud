import { ChangeEvent, FC, useState } from "react";
import userList from "../store/userList";
import { IUser } from "../models/models";
import Button from "./UI/Button";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [isEdit, setEdit] = useState<boolean>(false);

  const [name, setName] = useState<string>(user.name);
  const [location, setLocation] = useState<string>(user.location);

  // ---------- inputs ---------- //
  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  // ---------- buttons ---------- //
  const deleteUserHandler = (id: string) => {
    userList.deleteUser(id);
  };

  const saveUserHandler = () => {
    userList.updateUser({ name, location, id: user.id });
    setEdit(false);
  };

  // ---------- JSX в зависимости от кнопки ---------- //
  const userData = (
    <div>
      <div className="user-item__name">{user.name}</div>
      <div>Location: {user.location}</div>
    </div>
  );

  const editData = (
    <div className="elements-block">
      <input
        type="text"
        value={name}
        onChange={changeNameHandler}
        placeholder="Name..."
      />
      <input
        type="text"
        value={location}
        onChange={changeLocationHandler}
        placeholder="Location..."
      />
    </div>
  );

  const editButton = (
    <Button
      className="btn primary-btn"
      width="125px"
      onClick={() => setEdit(true)}
    >
      Edit
    </Button>
  );

  const saveButton = (
    <Button className="btn primary-btn" onClick={saveUserHandler}>
      Save
    </Button>
  );
  // --------------------------------------------- //

  return (
    <div className="user-item">
      {isEdit ? editData : userData}

      <div className="elements-block">
        {isEdit ? saveButton : editButton}

        <Button
          className="btn secondary-btn"
          width="90px"
          onClick={() => deleteUserHandler(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
