import {useUser} from './useUser';
import { axiosInstance } from '../api/axios';
import { AuthResponse, AuthRequest } from '../lib/user-definitions';
import useCookie from './useCookies';

export const useAuth = () => {

    const {user, addUser, removeUser } = useUser();
    
    const { getCookie, setCookie, removeCookie } = useCookie();

    const refresh = () => {
        let existingUser = null;
        const getFromCookie = async () => (existingUser = getCookie('user'));
        getFromCookie();

        if(existingUser){
            try {
                addUser(JSON.parse(existingUser));
            } catch (error) {
                console.log(error)
            }
        }
    }

    const login = async (creds: AuthRequest) => {
        return await axiosInstance.post('/auth/authenticate', creds)
        .then((res) => {
            if(res.data?.access_token){
                addUser(res.data);
                setCookie('user', JSON.stringify(res.data));
            }
            return res.data as AuthResponse;
        })
        .catch((err) => {
            if(err && err?.response && err?.response?.data?.message){
                return {...err.response.data, token: null} as AuthResponse;
            }
            else return err;
        });
    };

    const logout = () => {
        removeUser();
    };

    return { user, login, logout, refresh };

}