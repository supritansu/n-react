import { data } from "../utils/constants";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { useState, useEffect } from "react";
import { RestuarantCard } from "./RestuarantCard";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useOnlinestatus from "../utils/useOnlinestatus";


export const Body = () => {
    const [list_rest, setlist_rest] = useState([]);//array destructuring can be done also
    const [searchtext, setsearchtext] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch(
                //"https://www.swiggy.com/mapi/homepage/getCards?lat=28.6436082&lng=77.08698369999999"
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6739913&lng=88.35064679999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            //console.log(json);
            // Optional Chaining

            setlist_rest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            setError("We will be back shortly");
        }
    };
    const status = useOnlinestatus();
    if (status === false) {
        return (
            <h1>This page is not offline</h1>
        )
    }
    if (list_rest?.length === 0) {
        return (
            <Shimmer />
        )
    } else {
        { console.log("body is starting" + list_rest) }
        return (

            <div className="body">

                <div className="filter flex">

                    <div className="search m-4 p-4">
                        <input type="text" className="search-box border border-solid border-black" value={searchtext} onChange={(e) => {

                            setsearchtext(e.target.value);
                        }} />

                        <button className="px-4 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                const filteredRestaurant = list_rest.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                                );
                                setFilteredRestaurant(filteredRestaurant);
                            }}>SEARCH</button>
                    </div>
                    <div className="search m-4 p-4 flex items-center">
                        <button
                            className="filter-btn px-4 py-2 bg-gray-100 "
                            onClick={() => {
                                const f_list = list_rest.filter((res) => res.info.avgRating > 4);
                                setlist_rest(f_list);
                            }}>Top Rated Restuarants</button></div>

                </div>
                <div className="flex flex-wrap">
                    {filteredRestaurant.map((each) =>
                        <Link key={each.info.id} to={"restuarant/" + each.info.id}><RestuarantCard newdata={each} /></Link>)}
                </div>
            </div>
        );
    }
};