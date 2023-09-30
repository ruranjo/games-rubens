import React from 'react'
import Cell from './Cell';
import './Board.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

interface Props {
    size: number;
    board: boolean[][];
    setBoard: React.Dispatch<React.SetStateAction<boolean[][]>>;
}

const Board: React.FC<Props> = ({size, board, setBoard }) => {

        
    const toggleLights = (row:number, col:number) => {
        const copy = [...board.map(r => [...r])]

        copy[row][col] = !copy[row][col]
        if (row < size - 1) 
            copy[row+1][col] = !copy[row+1][col]
        if (row > 0) 
            copy[row-1][col] = !copy[row-1][col]
        if (col < size - 1) 
            copy[row][col+1] = !copy[row][col+1]
        if (col > 0) 
            copy[row][col-1] = !copy[row][col-1]

        setBoard(copy)
    }

    const gameEnds = () => board.every(row => row.every(c => !c) )
        
    board.forEach(function (elemento, indice, _) {
        console.log(elemento, indice);
    });
  return (
    <div className="Board">
           {gameEnds() 
           ?    
           <Dialog
            open={gameEnds()}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                You won!
            </DialogContentText>
            </DialogContent>

            <DialogActions>
            <Button onClick={() => { window.location.reload(); } } color="primary">
                Close
            </Button>
            </DialogActions>
            </Dialog>
           :    
                board.map((row, rowIndex) => 
                    <div className="row" key={rowIndex}>
                        {row.map((_, colIndex) => (
                            <Cell 
                            key={`${rowIndex}-${colIndex}`}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            isOn={board[rowIndex][colIndex]}
                            toggleLights={toggleLights}
                            />
                        ))}
                </div>) 
           }
    </div>
  )
}

export default Board

 