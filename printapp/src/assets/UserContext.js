import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export function UserContextProvider({children}){
    const [username, setUsername] = useState('');

    useEffect(() => {
        axios.get('/profile').then(response => {
            if (!response.data.username){
                setUsername('');
            } else {
                setUsername(response.data.username);
            }
            console.log(username);
        })
    }, []);

    return(
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;