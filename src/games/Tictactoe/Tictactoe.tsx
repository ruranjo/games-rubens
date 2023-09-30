import { useState } from 'react'
import { Board } from '../../components/TictactoeComponents';
import { Header } from '../../components/common/Header';


  
const X = 'X';
const O = 'O';


const Tictactoe = () => {
    const [currentPlayer, setCurrentPlayer] = useState<string>(X);
    const squareId = [0,1,2,3,4,5,6,7,8];
    const [squares, setSquares] = useState<string[]>(squareId.map((_) => ''));
  
    const switchPlayerTurn = () =>{
        if(currentPlayer === X){
            setCurrentPlayer(O);
        }else{
            setCurrentPlayer(X);
        }
    }

    const resetBoard = () =>{
        const temp = squareId.map((_) => '')
        setSquares(temp)
        setCurrentPlayer(X)
    }


    return (
        <>
            <Header game='tictactoe' currentPlayer={currentPlayer} resetBoard={resetBoard} />
            <Board currentPlayer={currentPlayer} switchPlayerTurn = {switchPlayerTurn} squares={squares} setSquares ={setSquares} squareId ={squareId} />

        </>
    )
}

export default Tictactoe

