'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';
import { AuthResponse } from '../lib/user-definitions';
import useCookie from '../hooks/useCookies';

interface AuthContextType {
    user: AuthResponse | null;
    setUser: (user: AuthResponse | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
});

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {

    const [ user, setUser ] = useState<AuthResponse | null>(null);
    const { getCookie } = useCookie();

    useEffect(() => {
        if(!user){
            let existingUser = null;
            const getFromCookie = async () => (existingUser = getCookie('user'));
            getFromCookie();

            if(existingUser){
                try {
                    setUser(JSON.parse(existingUser));
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },[]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );

}