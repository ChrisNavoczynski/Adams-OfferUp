import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import SignUp from "../SignUp/SignUp"; //This component needs added yet
import LogIn from "../LoginModal/LogIn";//This component needs added yet
import LogOut from "./LogOut"; //This component needs added yet


const Auth0ButtonSet = () => {
    const { isAuthenticated } = useAuth0();
        if (isAuthenticated) {
            return <Logout />;
            //This component needs added yet 
        } else {
            return <LogIn />;
        }
};
export default Auth0ButtonSet;