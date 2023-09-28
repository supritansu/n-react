import { link } from "../utils/constants";
import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
export const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={link} /></div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);