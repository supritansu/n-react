import { data } from "../utils/constants";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { useState, useEffect } from "react";
import { RestuarantCard } from "./RestuarantCard";

import { Shimmer } from "./Shimmer";


export const Body = () => {
    const [list_rest, setlist_rest] = useState([]);//array destructuring can be done also
    const [searchtext, setsearchtext] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6436082&lng=77.08698369999999"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setlist_rest(json?.data?.success.cards[1]?.gridWidget.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success.cards[1]?.gridWidget.gridElements?.infoWithStyle?.restaurants);

    };
    return list_rest.length === 0 ? (
        <Shimmer />
    ) : (

        <div className="body">

            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchtext} onChange={(e) => {

                        setsearchtext(e.target.value);
                    }} />

                    <button onClick={() => {
                        const filteredRestaurant = list_rest.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>This is a search button</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const f_list = list_rest.filter((res) => res.info.avgRating > 4);
                        setlist_rest(f_list);
                    }}>Top Rated Restuarants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((each) =>
                    <RestuarantCard key={each.info.id} newdata={each} />)}
            </div>
        </div>
    );
};