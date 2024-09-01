import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import montreal from "../assets/montreal.jpg";
import londres from "../assets/londres.jpg";
import newyork from "../assets/new-york.jpg";
import { useState } from 'react';
import "../styles/destination.css";

function Destination() {
  const voyages = [
    { id: 1, name: 'Paris', country: 'France', duree: 3, price: 450, description: 'Magnifique paysage du terroir', image: paris },
    { id: 2, name: 'New York', country: 'USA', duree: 7, price: 800, description: 'Ville qui ne dort jamais', image: newyork },
    { id: 3, name: 'Tokyo', country: 'Japan', duree: 10, price: 1200, description: 'Une fusion de la tradition et de la modernité', image: tokyo },
    { id: 4, name: 'Londres', country: 'Angleterre', duree: 5, price: 590, description: 'Ville historique avec une touche contemporaine', image: londres },
    { id: 5, name: 'Montréal', country: 'Canada', duree: 12, price: 930, description: 'Ville bilingue avec une culture riche', image: montreal },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-lg-2">
        {voyages.map((voyage) => (
          <div key={voyage.id} className="col mb-4">
            <div className="card">
              <img src={voyage.image} className="card-img-top w-100 h-100" alt={voyage.name} />
              <div className="card-body">
                <h5 className="card-title">{voyage.name}</h5>
                <p className="card-text">{voyage.description} - {voyage.country}</p>
                <small>{voyage.duree} jours - {voyage.price} €</small>
                <br />
                <button className="btn bouton" onClick={() => setTotalPrice(totalPrice + voyage.price)}>Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton pour afficher/masquer le panier */}
      {isOpen ? (
        <div className="mt-4 panier">
          <h3>Prix total: {totalPrice} €</h3>
          <button className="btn bouton" onClick={() => setIsOpen(false)}>Fermer le panier</button>
        </div>
      ) : (
        <button className="btn bouton"  onClick={() => setIsOpen(true)}>Mon panier</button>
      )}
    </div>
  );
}

export default Destination;
