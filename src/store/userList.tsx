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
      this.users = [...this.users, ...response.data];
    });
  }

  addUser(name: string, location: string, id: number) {
    const userData = {
      name,
      location,
      id,
    };

    runInAction(() => {
      this.users.push(userData);
    });
  }

  removeUser(id: number) {
    runInAction(() => {
      this.users = this.users.filter((users) => users.id !== id);
    });
  }
}

export default new UserList();
