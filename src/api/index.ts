import axios from "axios";
import { SignInUser } from "../store";

const API_BASE = "https://localhost:7000/api";

export function getUsers(): Promise<User[]> {
  return axios.get(`${API_BASE}/User`).then((res) => res.data as User[]);
}

interface SingInRequestType {
  username: string;
  password: string;
}

export const signIn = (loginData: SingInRequestType): Promise<SignInUser> => {
  return axios.post<SingInRequestType, SignInUser>(
    `${API_BASE}/Account`,
    loginData
  );
};
