
import "./square.scss"
import imageX from '../../../assets/x.png'
import imageO from '../../../assets/o.png'
import imageSqure from '../../../assets/square.png'

interface Props{
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
    selected: string;
}

const  Square: React.FC<Props> = ({handleOnClick, selected}) => {
  const imageSrc = selected ? (selected === 'X' ? imageX : imageO) : imageSqure

  
  return (
    <div className="square">
      <button onClick={handleOnClick}>
        <img src={imageSrc} alt={selected} />
      </button>
    </div>
  )
}

export default Square
