
import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { link2 } from "../utils/constants";
export const RestuarantCard = (props) => {
    const { newdata } = props;  //the newdata here must be same as the newdata which is sent as parametes
    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={link2 + newdata.info.cloudinaryImageId} />
            <h3>{newdata.info.name}</h3>
            <h4>{newdata.info.areaName}</h4>
            <h4>{newdata.info.costForTwo}</h4>
            <h4>{"Rating is " + newdata.info.avgRating}</h4>
        </div>
    );
};