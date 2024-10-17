import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyleTitre = styled.h4`
  box-shadow: 1px 3px 5px 0px rgba(0, 0 ,0, 0.2); 
  border-radius: 10px;
`

const StyledLink = styled(Link)`
  color: blue;
  font-weight:bold;
  font-size: 20px;
  text-decoration: none;
  display: inline-block; /* Ajout de display: inline-block */
  padding: 5px 10px; /* Ajout d'un peu de padding pour mieux voir le hover */

  &:hover {
    color: white;
    background-color: blue;
    border-radius: 10px;
  }
`

export default function Aide() {
  return (
    <div className='container'>
      <StyleTitre className='container mt-5 bg-danger text-light p-3 text-center'>
        Retrouver les réponses à vos questions les plus fréquentes dans la section FAQ
      </StyleTitre>

      <nav>
        <StyledLink to="#">FAQ</StyledLink>
        <StyledLink to="#">Contacter le service client</StyledLink>
      </nav>
    </div>
  )
}
