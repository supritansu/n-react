import { link } from "../utils/constants";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/context";


import useOnlinestatus from "../utils/useOnlinestatus";
export const Header = () => {
    const { loggedinUser } = useContext(UserContext)
    const [btnname, setbtnname] = useState(["Login"])
    const onlinestatus = useOnlinestatus();
    return (<div className="flex justify-between  bg-pink-100 shadow-sm m-2 px-5 sm:bg-yellow-50 lg:bg-green-50">

        <div className="logo-container">
            <img className="w-56" src={link} /></div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4">Contact US</li>
                <li className="px-4">Online status:{onlinestatus ? "Active" : "Inactve"}</li>
                <li className="px-4">Cart</li>
                <li className="px-4"><Link to="/grocerry">Grocerry</Link></li>

                <li className="px-4">{loggedinUser}</li>


                <button
                    className="login"
                    onClick={() => { setbtnname("Logout") }}>{btnname}</button>
            </ul>
        </div>
    </div>
    )
};