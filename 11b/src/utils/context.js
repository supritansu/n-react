import React from "react";
import { createContext } from "react";

const UserContext = createContext({
    loggedinUser: "Default User"
}
);
export default UserContext;