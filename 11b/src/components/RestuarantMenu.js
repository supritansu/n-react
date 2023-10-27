import React, { useState } from 'react'
import { useEffect } from 'react'
import { api1, api2 } from '../utils/constants'
import { useParams } from 'react-router-dom';
import { Shimmer } from "./Shimmer";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { RestuarantCategory } from './RestuarantCategory';
const RestuarantMenu = () => {

    const { resId } = useParams();

    const data = useRestuarantMenu(resId);
    const [index1, setindex1] = useState(0);



    if (data === null) {
        return <Shimmer />;
    }
    const names = data?.cards[0]?.card?.card?.info?.name;
    const address = data?.cards[0]?.card?.card?.info?.areaName;
    //const { itemCards } = d.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    const categories = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)
    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{names}</h1>
            <p className='font bold text-lg'>{address}
            </p>
            {categories.map((category, index) => (
                <RestuarantCategory data={category} setindex1={() => { if (index != index1) { setindex1(index) } else { setindex1(null) } }}
                    showItems={index === index1 ? true : false} />
            ))}


        </div>
    )
}

export default RestuarantMenu;