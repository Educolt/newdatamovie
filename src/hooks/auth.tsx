import React, { createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface AuthProviderProps {
    children: ReactNode
}

interface User {
    username: string;
    password: string;
}

interface IAuthContextData {
    user: User,
    signIn(): () => void,
    signOut(): () => void,
    isAuthered: boolean
}

// import app api
import {api} from '../services/api';

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState<User>({} as User);

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        // get user registered
        const loadUser = async () => {
            const response = await api.get('/user');

            const data = response.data[0];

            const user = {
                username: data.username,
                password: data.password
            }

            setUser(user)
        } 
        loadUser();
    }, []);

    const signIn = () => {
        setIsAuth(true);
    }
    const signOut = () => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthered: isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }