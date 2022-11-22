import create from "zustand";

export interface User {
  username: string;
  role: string;
  success?: boolean;
  error: string;
  userId?: number;
}

interface UserState {
  user: User;
  addUser(user: User): void;
  removeUser(): void;
}

const initialState = {
  username: "",
  role: "",
  error: "",
};

const useUserStore = create<UserState>((set) => ({
  user: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addUser: (user: User) => set((state) => ({ user: user })),
  removeUser: () => set({ user: initialState }),
}));

export default useUserStore;
