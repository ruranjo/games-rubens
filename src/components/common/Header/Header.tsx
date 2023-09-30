import React from "react"
import './Header.scss'

interface Props {
    currentPlayer: string | number;
    resetBoard: () => void;
    game: string;
}

const Header:React.FC <Props> = ({currentPlayer, resetBoard, game}) => {
  return (
    <div className="score-container">

        {
          game === "lightsout" && (
            <div className="score">
              <span>lightsout</span>
            </div>
          )
        }

        {
          (game === "tictactoe") && (
            <div className="score">
              <span>Next Player:</span> <div className="icon-player">{currentPlayer}</div>
            </div>
          )
        }

        {
          (game === "memory") && (
            <div className="score">
              <span>Memory</span>
            </div>
          )
        }

        <div className="btn-container">
          <button className="restart" onClick={() => resetBoard()}>
              RESTART
          </button>
          <button className="menu" onClick={() => {window.location.reload()}}>
              MENU
          </button>
        </div>
    </div>
  )
}

export default Header
