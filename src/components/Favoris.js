import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import montreal from "../assets/montreal.jpg";
import londres from "../assets/londres.jpg";
import newyork from "../assets/new-york.jpg";
import "../styles/destination.css";

export default function Favoris({ favorites, addToCart }) {
  // Liste des voyages disponibles
  const voyages = [
    { id: 1, name: 'Paris', country: 'France', duree: 3, price: 450, description: 'Magnifique paysage du terroir', image: paris },
    { id: 2, name: 'New York', country: 'USA', duree: 7, price: 800, description: 'Ville qui ne dort jamais', image: newyork },
    { id: 3, name: 'Tokyo', country: 'Japan', duree: 10, price: 1200, description: 'Une fusion de la tradition et de la modernité', image: tokyo },
    { id: 4, name: 'Londres', country: 'Angleterre', duree: 5, price: 590, description: 'Ville historique avec une touche contemporaine', image: londres },
    { id: 5, name: 'Montréal', country: 'Canada', duree: 12, price: 930, description: 'Ville bilingue avec une culture riche', image: montreal },
  ];

  // Filtrer les voyages qui sont en favoris
  const favoriteVoyages = voyages.filter(voyage => favorites.includes(voyage.id));

  // Vérifie si le tableau est vide
  if (favoriteVoyages.length === 0) {
    return <div className="d-flex justify-content-center mt-5"><p className="">Aucun voyage en favoris !</p></div>;
  }

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-lg-2">
        {favoriteVoyages.map((voyage) => (
          <div key={voyage.id} className="col mb-4">
            <div className="card">
              <div className="image-container position-relative">
                <img src={voyage.image} className="card-img-top w-100 h-100" alt={voyage.name} />
              </div>
              
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
                      alert(`Vous avez ajouté la destination de "${voyage.name}" à votre panier`);
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
