import '../styles/Footer.css'

export default function Footer(){
  return (
    <>
    <div className="row row-cols-lg-3 bg-dark p-3 text-light d-flex justify-content-around footer-css">
      <div className="col d-flex justify-content-center">
        <p>Des voyages d'exception <i class="bi bi-airplane-fill fs-5"></i></p>
      </div>
      <div className="col d-flex justify-content-center">
        <p>Les meilleurs réductions <i class="bi bi-tags-fill fs-5"></i></p>
      </div>
      <div className="col d-flex justify-content-center">
        <p>Nos experts à votre service <i class="bi bi-person-rolodex fs-5"></i></p>
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