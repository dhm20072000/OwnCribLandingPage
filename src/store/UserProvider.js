import React, {useState,useEffect} from 'react';
import UserContext from './user-context';

const UserProvider = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if(storedUserLoggedInInformation === '1'){
            setIsLoggedIn(true);
        }
    },[]);

    const loginHandler = (email,password) => {
        if(email === 'owncrib@gmail.com' && password === '123456'){
            localStorage.setItem('isLoggedIn','1');
            setIsLoggedIn(true);
        }
        setEmail(email);
        setPassword(password);
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const userContext = {
        email: email,
        password: password,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: loginHandler
    }

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;
