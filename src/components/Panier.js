// Panier.js
import "../styles/panier.css";

function Panier({ totalPrice, setTotalPrice, isOpen, setIsOpen, voyages, clearCart }) {
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
        <h3>Prix total: {totalPrice} €</h3>
        <button className="btn bouton" onClick={() => setIsOpen(false)}>
          Fermer le panier <i className="bi bi-basket2"></i>
        </button>
        <br />
        <button className="btn btn-warning mt-1" onClick={clearCart}>
          Vider le panier <i className="bi bi-basket3"></i>
        </button>
      </div>
    ) : (
      <div className="mt-4 close-cart">
        <button className="btn bouton" onClick={() => setIsOpen(true)}>
          Mon panier <i className="bi bi-basket2"></i>
        </button>
      </div>
    )
  );
}

export default Panier;
