import {ChangeEvent, FC, useState} from "react";
import userList from "../store/userList";
import { IUser } from "../models/models";

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
    <button className="btn primary-btn" onClick={() => setEdit(true)}>
      Edit
    </button>
  );

  const saveButton = (
    <button className="btn primary-btn" onClick={saveUserHandler}>
      Save
    </button>
  );
  // --------------------------------------------- //

  return (
    <div className="user-item">
      {isEdit ? editData : userData}

      <div className="elements-block">
        {isEdit ? saveButton : editButton}

        <button
          className="btn secondary-btn"
          onClick={() => deleteUserHandler(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
