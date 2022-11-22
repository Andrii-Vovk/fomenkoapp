import axios from "axios";
import { User } from "../store";

const API_BASE = "https://localhost:7000/api";

export function getUsers(): Promise<User[]> {
  return axios.get(`${API_BASE}/User`).then((res) => res.data as User[]);
}

type SingInRequestType = {
  username: string;
  password: string;
};

export const signIn = (username: string, password: string): Promise<User> => {
  return axios.post<SingInRequestType, User>(`${API_BASE}/Account`, {
    username,
    password,
  });
};
