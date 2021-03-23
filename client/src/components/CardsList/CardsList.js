import Card from '../Card/Card'
import styled from 'styled-components'

function CardsList() {
  const characters = [1,2,3,2,2,2,2,2,2,2,2,2,2,22,2];
  const charactersCardsDiv = styled.div`{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
  }`
  return (
    <charactersCardsDiv>
      {characters && characters.map(el => <Card character={el}/>)
      }
    </charactersCardsDiv>
  )
}

export default CardsList
