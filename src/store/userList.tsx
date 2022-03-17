import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { IUser } from "../types/types";
import { v4 as uuidv4 } from "uuid";

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

  addUser(name: string, location: string) {
    const userData = {
      name,
      location,
      id: uuidv4(),
    };

    runInAction(() => {
      this.users.push(userData);
    });
  }

  editUser(name: string, location: string, id: string) {
    const userData = {
      name,
      location,
      id,
    };

    const index = this.users.map((user) => user.id);

    runInAction(() => {
      this.users[index.indexOf(id)] = userData;
    });
  }

  removeUser(id: string) {
    runInAction(() => {
      this.users = this.users.filter((users) => users.id !== id);
    });
  }
}

export default new UserList();
