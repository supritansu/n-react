import { data } from "../utils/constants";
import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { useState } from "react";
import { RestuarantCard } from "./RestuarantCard";
import SearchBox from "./Searchbox";



export const Body = () => {
    const [list_rest, setlist_rest] = useState(data);//array destructuring can be done also
    return (

        <div className="body">

            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const f_list = list_rest.filter((res) => res.info.avgRating > 4);
                        setlist_rest(f_list);
                    }}>Top Rated Restuarants</button>
            </div>
            <div className="res-container">
                {list_rest.map((each) =>
                    <RestuarantCard key={each.info.id} newdata={each} />)}
            </div>
        </div>
    );
};