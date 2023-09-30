import  { useState } from 'react'
import { Header } from '../../components/common/Header'
import Board from './Board'


const Lightsout  = () => {
  const size = 5;

  const createGrid = () =>
     
    new Array(size).fill(undefined).map((_) => 
    new Array(size).fill(undefined).map((_) => Math.random() < 0.4));
  

    const [ board, setBoard ] = useState(createGrid())

    const resetGame = () => {
        setBoard(createGrid())
    }
  
  return (
    <div>
        <Header game={"lightsout"} currentPlayer={""} resetBoard={resetGame} />
        <Board  size={5} board ={board} setBoard ={setBoard} />
    </div>
  )
}

export default Lightsout
