import React from "react"
import './Header.scss'

interface Props {
    currentPlayer: String;
}

const Header:React.FC <Props> = ({currentPlayer}) => {
  return (
    <div className="score-container">
        <div className="score">
            <span>Next Player:</span> {currentPlayer}
        </div>
        <button onClick={() => {window.location.reload()}}>
            RESTART
        </button>
        <button onClick={() => {window.location.reload()}}>
            MENU
        </button>
    </div>
  )
}

export default Header


/*
import '../scss/header.scss'

function Header(props: {currentPlayer: string}) {
  return (
    <div className="score-container">
      <div className="score">
        <span>Next player:</span> {props.currentPlayer}
      </div>
      <button onClick={() => {window.location.reload()}}>
        RESTART
      </button>
    </div>
  )
}

export default Header
*/