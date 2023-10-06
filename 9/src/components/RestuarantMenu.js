import React, { useState } from 'react'
import { useEffect } from 'react'
import { api1, api2 } from '../utils/constants'
import { useParams } from 'react-router-dom';
import { Shimmer } from "./Shimmer";
import useRestuarantMenu from "../utils/useRestuarantMenu";
const RestuarantMenu = () => {

    const { resId } = useParams();

    const { resInfo } = useRestuarantMenu(resId);


    if (resInfo === null) {
        return <Shimmer />;
    }
    const names = resInfo?.cards[0]?.card?.card?.info?.name;
    const address = resInfo?.cards[0]?.card?.card?.info?.areaName;
    const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className='menu'>
            <h1>{names}</h1>
            <h2>{address}</h2>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name}</li>)}
                <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
            </ul>
        </div>
    )
}

export default RestuarantMenu;