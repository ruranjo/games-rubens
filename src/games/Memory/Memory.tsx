import { Header } from "../../components/common";
import Cards, { Item } from "./Cards";
import './Memory.scss'
import angular from '../../assets/angular.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import scss from '../../assets/scss.png'
import vue from '../../assets/vue.png'
import { useState } from "react";


function Memory() {
    
    

    const [items, setItems] = useState<Item[]>([
        { id: 1, img: html, stat: "" },
        { id: 1, img: html, stat: "" },
        { id: 2, img: css, stat: "" },
        { id: 2, img: css, stat: "" },
        { id: 3, img: js, stat: "" },
        { id: 3, img: js, stat: "" },
        { id: 4, img: scss, stat: "" },
        { id: 4, img: scss, stat: "" },
        { id: 5, img: react, stat: "" },
        { id: 5, img: react, stat: "" },
        { id: 6, img: vue, stat: "" },
        { id: 6, img: vue, stat: "" },
        { id: 7, img: angular, stat: "" },
        { id: 7, img: angular, stat: "" },
        { id: 8, img: node, stat: "" },
        { id: 8, img: node, stat: "" }
    ].sort(() => Math.random() - 0.5));
    
    const resetGame = () => {
        const temp = [
            { id: 1, img: html, stat: "" },
            { id: 1, img: html, stat: "" },
            { id: 2, img: css, stat: "" },
            { id: 2, img: css, stat: "" },
            { id: 3, img: js, stat: "" },
            { id: 3, img: js, stat: "" },
            { id: 4, img: scss, stat: "" },
            { id: 4, img: scss, stat: "" },
            { id: 5, img: react, stat: "" },
            { id: 5, img: react, stat: "" },
            { id: 6, img: vue, stat: "" },
            { id: 6, img: vue, stat: "" },
            { id: 7, img: angular, stat: "" },
            { id: 7, img: angular, stat: "" },
            { id: 8, img: node, stat: "" },
            { id: 8, img: node, stat: "" }
        ].sort(() => Math.random() - 0.5);

        setItems(temp);
    }


    return (
        <div className="board-memory">
            <Header game={"memory"} currentPlayer={"Memory"} resetBoard={resetGame}  />
            <Cards items={items} setItems={setItems}/>
        </div>
    );
}

export default Memory;