import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React, { useState } from 'react'
import { Square } from '..';
import './Board.scss'

interface Props {
    currentPlayer: string;
    switchPlayerTurn: () => void;
    squareId: number[];
    squares: string[];
    setSquares: React.Dispatch<React.SetStateAction<string[]>>;
}

const Board: React.FC<Props> = ({ currentPlayer, switchPlayerTurn, squareId, squares, setSquares }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [winner, setWinner] = useState<string>(''); 

    const checkForWinner = (squares: string[]) => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return true
            }
          }
          return false
          
    }

    const checkForTie = (squares: String[]) => {
        for (let i = 0; i < squares.length; i++) {
          const element = squares[i];
          if(element === '') {
            return false
          }
        }
        return true
    }

    const handleOnclick = (i: number) => {
        return () => {
            if(squares[i] === '' && !winner){
                const squaresCopy = [...squares]
                squaresCopy[i] = currentPlayer
                setSquares(squaresCopy)
                
                if(checkForWinner(squaresCopy)) {
                    setWinner(currentPlayer)
                    setShowModal(true)
                } else if (checkForTie(squaresCopy)) {
                    setWinner('nobody')
                    setShowModal(true)
                }else{
                    switchPlayerTurn()
                }
            }
        }
    }

  return (
    <div className='board'>

        {
            squareId.map((i) => 
            <Square key={i} handleOnClick={handleOnclick(i)} selected={squares[i]}></Square>
            )
        }

        <Dialog
            open={showModal}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                The winner is {winner}!
            </DialogContentText>
            </DialogContent>

            <DialogActions>
            <Button onClick={() => {setShowModal(false); window.location.reload(); } } color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>

    </div>
  )
}

export default Board

