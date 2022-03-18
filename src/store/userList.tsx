import { makeAutoObservable, runInAction } from "mobx";
import { IUser } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import axios from "../api/apiUsers";

class UserList {
  users: IUser[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers() {
    const response = await axios.get<IUser[]>("/users");

    runInAction(() => {
      this.users = [...this.users, ...response.data];
    });
  }

  // ---------- Добавление, изменение, удаление ---------- //
  async addUser(name: string, location: string) {
    const userData = {
      name,
      location,
      id: uuidv4(),
    };

    await axios.post<IUser[]>("/users", userData);

    runInAction(() => {
      this.users.push(userData);
    });
  }

  async editUser(name: string, location: string, id: string) {
    const userData = {
      name,
      location,
      id,
    };

    await axios.patch<IUser[]>(`/users/${id}`, userData);

    const userId = this.users.map((user) => user.id);
    const index = userId.indexOf(id);

    runInAction(() => {
      this.users[index] = userData;
    });
  }

  async removeUser(id: string) {
    await axios.delete<IUser[]>(`/users/${id}`);

    runInAction(() => {
      this.users = this.users.filter((users) => users.id !== id);
    });
  }

  // ---------- Поиск ---------- //
  async search(value: string) {
    const response = await axios.get<IUser[]>(`/users?q=${value}`);

    runInAction(() => {
      this.users = response.data;
    });
  }

  clearUsers() {
    runInAction(() => {
      this.users = [];
    });
  }
}

export default new UserList();
