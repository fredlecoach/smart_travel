import '../styles/Footer.css'
import styled from 'styled-components'

const StyledA = styled.a`text-decoration: none; color: white;
  &:hover{
  color: red
  }
`

export default function Footer(){
  return (
    <>
    <div className="row row-cols-lg-4 bg-dark p-3 text-light d-flex justify-content-around footer-css mt-5">
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Des voyages d'exception <i class="bi bi-airplane-fill fs-5"></i></h5>
        <p>Vous faire plaisir est notre maître mot <i class="bi bi-heart"></i></p>
      </div>
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Les meilleurs réductions <i class="bi bi-tags-fill fs-5"></i></h5>
        <p>Du haut de gamme à des prix bas de gamme <i class="bi bi-gem"></i></p>
      </div>
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Nos experts à votre service <i class="bi bi-person-rolodex fs-5"></i></h5>
        <p>Nos conseillers disponibles 24h/24 <i class="bi bi-phone"></i></p>
      </div>
          {/* lien restaurants */}
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Nos bonnes adresses <i class="bi bi-compass"></i></h5>
        <StyledA href="/restaurants" className='text-decoration-none'>Nos restaurants <i class="bi bi-map"></i></StyledA>
      </div>
    </div>
    
    {/* réseaux sociaux */}
    <div className="d-flex justify-content-center bg-dark text-light p-3">
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-instagram fs-5"></i>
      </div>
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-facebook fs-5"></i>
      </div>
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-twitter-x fs-5"></i>
      </div>
    </div>


    </>
  )
}
