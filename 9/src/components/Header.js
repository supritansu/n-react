import { link } from "../utils/constants";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlinestatus from "../utils/useOnlinestatus";
export const Header = () => {
    const [btnname, setbtnname] = useState(["Login"])
    const onlinestatus = useOnlinestatus();
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={link} /></div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>Contact US</li>
                <li>Online status:{onlinestatus ? "Active" : "Inactve"}</li>
                <li>Cart</li>
                <li><Link to="/grocerry">Grocerry</Link></li>

                <button
                    className="login"
                    onClick={() => { setbtnname("Logout") }}>{btnname}</button>
            </ul>
        </div>
    </div>
    )
};