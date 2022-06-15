import { createContext, useContext } from "react";

/** @type {import('react').Context<User | undefined>} */
export const UserContext = createContext(undefined);

export function useUser() {
    return useContext(UserContext);
}