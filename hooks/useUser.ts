import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthResponse } from "../lib/user-definitions";
import useCookie from "./useCookies";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setCookie, removeCookie } = useCookie();

    const addUser = (user: AuthResponse) => {
        setUser(user);
        setCookie('user', JSON.stringify(user));
    }

    const removeUser = () => {
        setUser(null);
        removeCookie('user');
    }

    return { user, addUser, removeUser };
}