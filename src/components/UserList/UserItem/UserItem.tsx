import { FC } from "react";
import { IUser } from "../../../types/types";
import classes from "./UserItem.module.scss";

interface UserItemProps {
  user: IUser;
  removeHandler: (e: number) => void;
}

const UserItem: FC<UserItemProps> = ({ user, removeHandler }) => {
  return (
    <div className={classes.UserItem}>
      <div>
        <div className={classes.name}>{user.name}</div>
        <div>Местоположение: {user.location}</div>
      </div>
      <div className={classes.buttons}>
        <button className={classes.edit}>Редактировать</button>
        <button
          className={classes.remove}
          onClick={() => removeHandler(user.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default UserItem;
