import React from 'react';

const UserContext = React.createContext({
    email: '',
    password: '',
    isLoggedIn: '',
    onLogout: () => {},
    onLogIn: (email,password) => {}
});

export default UserContext;