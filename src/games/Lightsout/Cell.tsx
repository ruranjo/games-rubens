import React from "react";
import './Cell.scss'

interface Props { 
    rowIndex:number;
    colIndex:number;
    isOn: boolean;
    toggleLights: (rowIndex:number,colIndex:number)=>void;
}

const Cell: React.FC<Props> = ({ rowIndex, colIndex, isOn, toggleLights }) => {

    const handleClick = () => toggleLights(rowIndex,colIndex);

    return <button 
            className={isOn ? "on" : "off"} 
            onClick={handleClick}/>
}

export default Cell;