import { makeAutoObservable, runInAction } from "mobx";
import axios from "../axios/axios";
import { IAuth } from "../models/models";

class AuthStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    const data = await axios.get<IAuth>("/login").then(res => res.data)

    if (data.email === email && data.password === password) {
      runInAction(() => {
        this.isAuth = true;
      });
    }
  }
}

export default new AuthStore();
