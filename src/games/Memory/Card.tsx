import React from 'react'
import { Item } from './Cards';
import './Memory.scss'

interface Props {
    item: Item;
    id:number;
    handleClick : (id:number) => void;
}

const Card: React.FC<Props> = ({item, id, handleClick}) => {
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )

}

export default Card