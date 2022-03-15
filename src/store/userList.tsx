import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { IUser } from "../types/types";

class UserList {
  users: IUser[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers() {
    const response = await axios.get<IUser[]>("http://localhost:8000/users");

    runInAction(() => {
      this.users = response.data;
    });
  }
}

export default new UserList();
