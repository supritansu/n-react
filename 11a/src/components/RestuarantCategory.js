import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ListItems } from "./ListItems";

export const RestuarantCategory = (data) => {
    const [toggle, settoggle] = useState(false)
    console.log(data)
    console.log(data.data?.card?.card?.title)
    const handleClick = () => {
        settoggle(!toggle)

    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.data?.card?.card?.title}({data.data?.card?.card?.itemCards?.length})</span>
                    <span>🡙</span>
                </div>

            </div>
            {toggle && <ListItems data={data.data?.card?.card?.itemCards} />}


        </div>)

}