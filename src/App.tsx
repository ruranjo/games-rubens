
import { useState } from 'react'
import './App.scss'
import { Menu } from './components/Menu';
import { Lightsout, Memory, Tictactoe } from './games';

function App() {
  const MAIN = "main";
  const TICTACTOE = "Tictactoe";
  const LIGHTSOUT = "Lightsout";
  const MEMORY = "Memory";
  

  const menuOptions = [MAIN,TICTACTOE,LIGHTSOUT,MEMORY]
  const [selectedOpction, setSelectedOpction ] = useState<string>("main")

  const changeOption = (option: string) : void =>{
    setSelectedOpction(option)
  }

  return (
    <div className='App'>
      
      {
        selectedOpction === MAIN && (<Menu menuOptions={menuOptions} changeOption = {changeOption} />)
      }

      {
        selectedOpction === TICTACTOE && (<Tictactoe/>)
      }
      {
        selectedOpction === LIGHTSOUT && (<Lightsout/>)
      }
      {
        selectedOpction === MEMORY && (<Memory/>)
      }

        
    </div>  
  )
}

export default App
