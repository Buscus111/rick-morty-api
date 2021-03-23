import { Link, useParams } from 'react-router-dom'

function Card({character}) {
  // const pathToInfo = useParams();
  return (
    <div>
      <img alt="">{character.photo}</img>    
      <Link to={character.name}>
        <h3>{character.name}</h3>
      </Link>
      фотки
    </div>
  )
}

export default Card
