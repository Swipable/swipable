import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Logout = () => {
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    setUser('')
    setIsLoggedIn(false);
    console.log(`Logout page: ${user && isLoggedIn}`)

    return (
        <div>
            <h1> You are now logged out </h1>

        </div>
    )
};

export default Logout;