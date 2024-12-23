import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import montreal from "../assets/montreal.jpg";
import londres from "../assets/londres.jpg";
import newyork from "../assets/new-york.jpg";
import "../styles/destination.css";
import { SearchContext } from "./searchContext";
import {useContext} from 'react'

function Destination({ totalPrice, setTotalPrice, isOpen, setIsOpen, addToCart, favorites, setFavorites, toggleFavorite }) {
  const voyages = [
    { id: 1, name: 'Paris', country: 'France', duree: 3, price: 450, description: 'Magnifique paysage du terroir', image: paris, departTime: '19h00', arrivalTime: '23h00' },
    { id: 2, name: 'New York', country: 'USA', duree: 7, price: 800, description: 'Ville qui ne dort jamais', image: newyork, departTime: '19h00', arrivalTime: '23h00' },
    { id: 3, name: 'Tokyo', country: 'Japan', duree: 10, price: 1200, description: 'Une fusion de la tradition et de la modernité', image: tokyo, departTime: '19h00', arrivalTime: '23h00' },
    { id: 4, name: 'Londres', country: 'Angleterre', duree: 5, price: 590, description: 'Ville historique avec une touche contemporaine', image: londres, departTime: '19h00', arrivalTime: '23h00' },
    { id: 5, name: 'Montréal', country: 'Canada', duree: 12, price: 930, description: 'Ville bilingue avec une culture riche', image: montreal, departTime: '19h00', arrivalTime: '23h00' },
  ];



  // Filtrage des voyages en fonction de la recherche = résultat de recherche
  const {search} = useContext(SearchContext)
  const filteredVoyages = voyages.filter(voyage =>
    voyage.name.toLowerCase().includes(search.toLowerCase()) ||
    voyage.country.toLowerCase().includes(search.toLowerCase())
  );

  

  // Vérifie si le tableau est vide
  if (filteredVoyages.length === 0) {
    return <div className="d-flex justify-content-center mt-5"><p className="">Aucun résultat pour cette destination !</p></div>;
  }



  // useEffect(
  //   ()=>{
  //     document.getElementById(heart-icon).color = #2151
  //   }, [isFavorite]
  // )
  

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-lg-2">
        {filteredVoyages.map((voyage) => (
          <div key={voyage.id} className="col mb-4">
            <div className="card">
              {/* positionner l'icone coeur */}
              <div className="image-container position-relative">
                <img src={voyage.image} className="card-img-top w-100 h-100" alt={voyage.name} />

                <i
                  className={`bi heart-icon position-absolute fs-3 ${favorites.includes(voyage.id) ? 'bi-balloon-heart-fill heart-icon-favorite' : 'bi-balloon-heart'}`}
                  onClick={() => {
                    const confirmed = window.confirm(`Voulez-vous ajouter ${voyage.name} à vos favoris ?`);
                    if (confirmed) {
                      toggleFavorite(voyage.id);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                  aria-label={favorites.includes(voyage.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
                ></i>



              </div>
              {/* fin de positionnement */}
              
              <div>
                <div className="row m-2">
                  <div className="col-8 rebord-right">
                    <h5 className="card-title">{voyage.name}</h5>
                    <p className="card-text">{voyage.country}</p>
                  </div>
                  <div className="col-4 justify-content-end d-flex">
                    <p>{voyage.duree} jours - <span className="fw-bold fs-4">{voyage.price} €</span></p>
                  </div>
                </div>
                <br />
                <div className="bg-light border-top">
                  <button 
                    className="btn bouton m-2" 
                    onClick={() => {
                      alert(`Vous avez ajouté la destination de " ${voyage.name} " à votre panier`);
                      addToCart(voyage);
                    }}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Destination;
