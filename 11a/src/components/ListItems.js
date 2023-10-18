
import React from 'react'
import { link2 } from '../utils/constants';


export const ListItems = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(item => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex "
                    key={item.card.info.id}>

                    <img src={link2 + item.card.info.imageId} className='w-14' />
                    <div>
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>-Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

