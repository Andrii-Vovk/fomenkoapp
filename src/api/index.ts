import axios from "axios";

const API_BASE = "https://localhost:7000/api";

export function getUsers(): Promise<User[]> {
    return axios.get(`${API_BASE}/User`).then(res => res.data as User[]);
}