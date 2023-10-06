
import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { link2 } from "../utils/constants";
export const RestuarantCard = (props) => {
    const { newdata } = props;  //the newdata here must be same as the newdata which is sent as parametes
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="res-logo rounded-lg"
                alt="res-logo"
                src={link2 + newdata.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-xl">{newdata.info.name}</h3>
            <h4>{newdata.info.areaName}</h4>
            <h4>{newdata.info.costForTwo}</h4>
            <h4>{"Rating is " + newdata.info.avgRating}</h4>
        </div>
    );
};