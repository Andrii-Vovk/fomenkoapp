/* eslint-disable @typescript-eslint/no-unused-vars */
import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
export interface SignInUser {
  username: string;
  role: string;
  success?: boolean;
  error: string;
  userId?: number;
}

interface UserState {
  user: SignInUser;
  addUser(user: SignInUser): void;
  removeUser(): void;
}

const initialState = {
  username: "",
  role: "",
  error: "",
};

type MyPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as MyPersist)(
    (set) => ({
      user: initialState,
      addUser: (user: SignInUser) =>
        set((state: UserState) => ({ user: user })),
      removeUser: () => set({ user: initialState }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
