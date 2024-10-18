import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Head';
import Destination from "./Destination";
import EmailForm from "./Mail";
import { SearchProvider } from "./searchContext";
import Panier from './Panier';
import { useState } from 'react';
import Compte from './Compte';
import Favoris from './Favoris';
import Reservations from './Reservations';
import Aide from './Aide';
import Footer from './Footer';
import RestaurantList from './Restaurant';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [voyages, setVoyages] = useState([]); // Définir comme tableau
  const [favorites,setFavorites] = useState([]); // définir les favoris
  const [reservations, setReservations] = useState([]);

  const addReservation = (voyage) => {
    setReservations((prevReservations) => {
      const isReserved = prevReservations.find(
        (reservation) => reservation.id === voyage.id
      )

      if (!isReserved){
        // si la reservation n'existe pas, on l'ajoute
        return [...prevReservations, {...voyage, passengers: 1 }];
      }
      // si la reservation existe, on incrémente le nombre de passagers pour la mettre à jour
      return prevReservations.map(
        (reservation) => reservation.id === voyage.id ? {...reservation, passengers: reservation.passengers + 1 } : reservation
      )
    }
    
    )
  }


    // Fonction pour gérer le clic sur l'icône cœur
    const toggleFavorite = (id) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id) // Retire des favoris
          : [...prevFavorites, id] // Ajoute aux favoris
      );
    };

  const addToCart = (voyage) => {
    setVoyages(prevVoyages => {
      const voyageExists = prevVoyages.find(v => v.id === voyage.id);
      if (voyageExists) {
        return prevVoyages.map(v => 
          v.id === voyage.id
            ? { ...v, quantity: v.quantity + 1 }
            : v
        );
      } else {
        return [...prevVoyages, { ...voyage, quantity: 1 }];
      }
    });
    setTotalPrice(prevPrice => prevPrice + voyage.price);

    addReservation(voyage)
  };

  const clearCart = () => {
    setTotalPrice(0);
    setVoyages([]);
  };

  return (
    <SearchProvider>
      <Router>
      <Header />
      <EmailForm />
      <Routes>
        <Route path="/compte" element={<Compte />} />
        <Route path="/favoris" element= { <Favoris 
        favorites={favorites}
        addToCart={addToCart}
        />} />

        <Route path="/restaurants" element={<RestaurantList />} />
        
        <Route path="/reservations" element={ <Reservations 
        reservations={reservations}
        setReservations={setReservations}
        />} />

        <Route path="/" element={ <Destination 
        totalPrice={totalPrice} 
        setTotalPrice={setTotalPrice} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        addToCart={addToCart} 
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavorite={toggleFavorite}
      />} />
      <Route path="/aide" element={<Aide />} />
      </Routes>

      </Router>
      <Footer />
      <Panier 
        totalPrice={totalPrice} 
        setTotalPrice={setTotalPrice} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        voyages={voyages} 
        clearCart={clearCart} // Passer la fonction clearCart comme prop
      />
      {/* <EmailForm /> */}
      {/* <Destination 
        totalPrice={totalPrice} 
        setTotalPrice={setTotalPrice} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        addToCart={addToCart} 
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavorite={toggleFavorite}
      /> */}
    </SearchProvider>
  );
}

export default App;
