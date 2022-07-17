import classes from "./Search.module.scss";
import React, {useEffect, useState} from "react";
import userList from "../../store/userList";

const Search = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
      userList.search(value);
  }, [value])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.Search}>
      <input
        type="text"
        placeholder="Enter the name of user..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
