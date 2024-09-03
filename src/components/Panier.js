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
        <button className="btn btn-warning" onClick={() => setIsOpen(false)}>
          Fermer 
        </button>
        {/* <br /> */}
        <button className="btn btn-danger mx-1" onClick={clearCart}>
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
