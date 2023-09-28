import { useState } from 'react'
import { Header } from '../../components/TictactoeComponents';

const X = 'X';
const Y = 'Y';


const Tictactoe = () => {
    const [currentPlayer, setCurrentPlayer] = useState<String>(X);
  
    return (
        <div>
            <Header currentPlayer={currentPlayer} />
        </div>
    )
}

export default Tictactoe