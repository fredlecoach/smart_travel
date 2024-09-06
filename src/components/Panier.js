import "../styles/panier.css";
import { useState, useEffect } from 'react';

function Panier({ totalPrice, setTotalPrice, isOpen, setIsOpen, voyages, clearCart }) {
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    if (isClearing) {
      alert(`Vous êtes sur le point de vider votre panier`);
      setIsClearing(false); // Réinitialiser l'état pour ne pas afficher l'alerte à chaque fois qu ele panier est vider
    }
  }, [isClearing]);

  return (
    isOpen ? (
      <div className="mt-4 open-cart">
        <div className="cart-header">
          <p>
            {voyages.length > 0 ? ( 
              voyages.map(travel => (
                <span key={travel.id}>
                  {travel.name} - {travel.price} € x {travel.quantity}
                  <br />
                </span>
              ))
            ) : (
              <span>Panier vide</span>
            )}
          </p>
        </div>
        <h3>Prix total : {totalPrice} €</h3>
        <button className="btn btn-warning" onClick={() => setIsOpen(false)}>
          Fermer 
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => {
            setIsClearing(true); // Déclencher l'état pour afficher l'alerte
            clearCart(); // Appeler la fonction pour vider le panier
          }}
        >
          Vider <i className="bi bi-basket3 fs-4"></i>
        </button>
      </div>
    ) : (
      <div className="mt-4 close-cart">
        <button className="btn bouton" onClick={() => setIsOpen(true)}>
          <i className="bi bi-basket fs-4"></i> panier 
        </button>
      </div>
    )
  );
}

export default Panier;
