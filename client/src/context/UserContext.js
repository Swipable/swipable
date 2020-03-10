import React from 'react';

 const UserContext = React.createContext({
    user: '',
    isLoggedIn: false,
    isLoading: false
});

export default UserContext;
