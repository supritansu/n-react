import React from "react";
const User = ({ name }) => {
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Hindmotor</h3>
            <h4>Contact: 7686872471</h4>
        </div>)
}
export default User;