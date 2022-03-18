import classes from "./Search.module.scss";
import React, { useState } from "react";
import userList from "../../store/userList";

const Search = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      userList.search(value);
    } else {
      userList.clearUsers();
      userList.getUsers();
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.Search}>
      <input
        type="text"
        placeholder="Введите имя или местоположение пользователя..."
        onKeyPress={onSubmit}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
