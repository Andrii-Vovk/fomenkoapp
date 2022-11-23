import axios, { AxiosResponse } from "axios";
import { SignInUser } from "../store";

const API_BASE = "https://localhost:7000/api";

export function getUsers(): Promise<UserFromUserList[]> {
  return axios
    .get(`${API_BASE}/User`)
    .then((res) => res.data as UserFromUserList[]);
}

interface SingInRequestType {
  username: string;
  password: string;
}

export const signIn = (
  loginData: SingInRequestType
): Promise<AxiosResponse<SignInUser>> => {
  return axios.post(`${API_BASE}/Account`, loginData);
};

export function getUser({ id }: { id: number }): Promise<AxiosResponse<User>> {
  return axios
    .get(`${API_BASE}/User/${id}`)
    .then((res) => res as AxiosResponse<User>);
}

export function getLocationHistory({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<LocationHistoryItem[]>> {
  return axios
    .get(`${API_BASE}/Location/${id}`)
    .then((res) => res as AxiosResponse<LocationHistoryItem[]>);
}

export function getDocuments({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<DocumentItem[]>> {
  return axios
    .get(`${API_BASE}/Document/${id}`)
    .then((res) => res as AxiosResponse<DocumentItem[]>);
}

export function getRequests({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<RequestItem[]>> {
  return axios
    .get(`${API_BASE}/Request/${id}`)
    .then((res) => res as AxiosResponse<RequestItem[]>);
}

export function getSalaryHistory({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<SalaryHistoryItem[]>> {
  return axios
    .get(`${API_BASE}/Finance/${id}`)
    .then((res) => res as AxiosResponse<SalaryHistoryItem[]>);
}
