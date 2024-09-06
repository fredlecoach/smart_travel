import "../styles/panier.css";
import { useState, useEffect } from 'react';

function Panier({ totalPrice, setTotalPrice, isOpen, setIsOpen, voyages, clearCart }) {
  const [isClearing, setIsClearing] = useState(false);

  // Effet pour gérer la confirmation avant de vider le panier
  useEffect(() => {
    if (isClearing) {
      const confirmClear = window.confirm('Vous êtes sur le point de vider votre panier. Voulez-vous continuer ?');

      if (confirmClear) {
        clearCart(); // Appeler la fonction pour vider le panier
      }
      setIsClearing(false); // Réinitialiser l'état après la confirmation
    }
  }, [isClearing, clearCart]);

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
          Fermer <i class="bi bi-x-circle"></i>
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => {
            setIsClearing(true); // Déclencher l'état pour afficher l'alerte
            // clearCart(); // Appeler la fonction pour vider le panier
          }}
        >
          Vider <i class="bi bi-trash3"></i>
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
