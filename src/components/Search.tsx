import { useEffect, useState } from "react";
import userList from "../store/userList";
import Input from "./UI/Input";

const Search = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    userList.search(value);
  }, [value]);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Enter the name of user..."
        onChange={onSearchHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
