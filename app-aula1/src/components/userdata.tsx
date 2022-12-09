import { createContext, useState, useContext } from 'react';
import { IChildrenProps } from '../models/ichildren';

export interface IUserData{
    id: string;
    username: string;
    token: string;
}

const defaultUserData : IUserData = {
    id: '',
    username: '',
    token: ''
}

interface UserContextProps{
    userData: IUserData;
    setUserData: (userData: IUserData) => void;
}

const UserContext = createContext<UserContextProps>(null as any);

export function User ({children} : IChildrenProps)
{
    const [userData, setUserData] = useState<IUserData>(defaultUserData);
    const value = {userData, setUserData};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const UserUser = () => useContext(UserContext);