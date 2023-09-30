//import React, { useState } from 'react'

import './Memory.scss'


import Card from './Card'
import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'

export interface Item { 
    id: number;
    img: string;
    stat: string;
}

export interface Props {
    items: Item[];
    setItems:  React.Dispatch<React.SetStateAction<Item[]>>;
}


const Cards: React.FC<Props> = ({items, setItems}) => {
    

    

    const gameEnds = () => items.every(item => item.stat === "correct") 

    const [prev, setPrev] = useState(-1);

    const check = (current: number) =>{
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (id:number) => {
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

  
    return (

        
 
        <div className="container">
            

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
           <>
            { items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))
            }
            </>
           }

        </div>


    )
}

export default Cards

/*
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

*/

