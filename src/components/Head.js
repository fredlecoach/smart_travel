import "../styles/header.css"; // Importation du fichier CSS
import logo from "../assets/logo2.png";
import { SearchContext } from "./searchContext";
import {  useContext } from "react";

function Header() {
  // on passe les infos de recherche
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <div className="debut text-light">
        <div className="header nav">
          <img src={logo} alt="logo" className="logo" />
          {/* <h1 className="title">Smart Travel</h1> */}
          <ul className="list-unstyled nav">
            <li className="nav-item">
              <div className="nav-icon"><i className="fa-solid fa-home"></i></div>
              <div className="nav-text">Home</div>
            </li>
            <li className="nav-item">
              <div className="nav-icon"><i className="fa-solid fa-heart"></i></div>
              <div className="nav-text">Favoris</div>
            </li>
            <li className="nav-item">
              <div className="nav-icon"><i className="fa-solid fa-briefcase"></i></div>
              <div className="nav-text">Réservations</div>
            </li>
            <li className="nav-item">
              <div className="nav-icon"><i className="fa-solid fa-user"></i></div>
              <div className="nav-text">Mon compte</div>
            </li>
          </ul>
        </div>
        <h3 className="text-center slogan" style={{ fontFamily: "Caveat"}}>Faites place à l'évasion</h3>
        <form onSubmit={(e) => e.preventDefault() }>
          <div className="searchbar">
            <input type="text" placeholder="Destination (pays, région, ville)" className="p-4" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-light mx-2">Rechercher</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Header;
