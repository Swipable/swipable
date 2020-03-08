import React from 'react';

 const UserContext = React.createContext({
    user: '',
    isLoggedIn: false
});

export default UserContext;