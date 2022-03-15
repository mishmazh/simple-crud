import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { IAuth } from "../types/types";

class AuthStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async authAttempt(email: string, password: string) {
    const response = await axios.get<IAuth>("http://localhost:8000/login");
    const data = response.data;

    if (data.email === email && data.password === password) {
      runInAction(() => {
        this.isAuth = true;
      });
    }
  }
}

export default new AuthStore();
