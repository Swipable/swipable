import React from 'react';

 const UserContext = React.createContext({
    user: '',
    isLoggedIn: false,
    loading: false
});

export default UserContext;
