import { makeAutoObservable, runInAction } from "mobx";
import { IUser } from "../models/models";
import axios from "../axios/axios";

class Users {
  users: IUser[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // ---------- CRUD ---------- //
  async fetchUsers() {
    const data = await axios.get<IUser[]>("/users").then((res) => res.data);

    runInAction(() => {
      this.users = data;
    });
  }

  async createUser(values: IUser) {
    await axios.post<IUser>("/users", values);
    await this.fetchUsers();
  }

  async updateUser(values: IUser) {
    const { id } = values;
    await axios.patch<IUser[]>(`/users/${id}`, values);
    await this.fetchUsers();
  }

  async deleteUser(id: string) {
    await axios.delete(`/users/${id}`);
    await this.fetchUsers();
  }

  // ---------- Search ---------- //
  async search(value: string) {
    await this.fetchUsers();

    runInAction(() => {
      this.users = this.users.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
}

export default new Users();
