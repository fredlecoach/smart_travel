import cj from '../assets/cj.jpeg'

export default function Compte(){
  return (
    <div className="container mt-5">
      <div class="card" style={{width: '25rem'}}>
        <img src={cj} class="card-img-top" alt="profil craig jones" />
        <div class="card-body">
          <ul class="card-text">
            <li>Nom : <span className="text-primary">Jones</span></li>
            <li>Prénom : <span className="text-primary">Craig</span></li>
            <li>E-mail : <span className="text-primary">cj@gmail.com</span></li>
            <li>Téléphone : <span className="text-primary">+1 514</span></li>
            <li>Adresse : <span className='text-primary'>3rd street of jjb, California</span></li>
          </ul>
        </div>
      </div>
    </div>
      
  )
}