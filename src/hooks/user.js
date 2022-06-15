import { createContext, useContext } from "react";

export const UserContext = createContext(undefined);

export function useUser() {
    return useContext(UserContext);
}