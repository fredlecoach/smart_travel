import "../styles/header.css"; // Importation du fichier CSS
import logo from "../assets/logo2.png";
import { SearchContext } from "./searchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  // on passe les infos de recherche
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <div className="debut text-light">
        <nav className="header navbar navbar-expand-lg">
          <span className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </span>

          {/* création du menu burger pour les petits écrans */}
          <button
            className="navbar-toggler ms-auto mx-2 d-lg-none" // caché à partir des grands écrans
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu normal visible sur les grands écrans */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
            <ul className="list-unstyled navbar-nav ms-auto" style={{ marginRight: "150px" }}>
              <li className="nav-item">
                <Link to="/" className="nav-color">
                  <div className="nav-icon">
                    <i className="fa-solid fa-home"></i>
                  </div>
                  <div className="nav-text">Home</div>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/favoris" className="nav-color">
                  <div className="nav-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="nav-text">Favoris</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reservations" className="nav-color">
                  <div className="nav-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <div className="nav-text">Réservations</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/compte" className="nav-color"> {/* Utilisation de d-flex pour aligner l'icône et le texte */}
                  <div className="nav-icon">
                    <i className="fa-solid fa-user"></i> {/* Icône d'utilisateur */}
                  </div>
                  <div className="nav-text ms-2">Mon compte</div> {/* ms-2 pour ajouter un espace entre l'icône et le texte */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aide" className="nav-color">
                <div className="nav-icon">
                  <i className="fa-solid fa-circle-question"></i>
                </div>
                <div className="nav-text">Aide</div>
                </Link>
              </li>

            </ul>
          </div>
        </nav>

        {/* Offcanvas Menu pour les petits écrans */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
          style={{ backgroundColor: "white", color: "black", width: "150px" }}
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasMenuLabel" className="offcanvas-title">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li className="nav-item">
                <div className="nav-icon">
                  <i className="fa-solid fa-home"></i>
                </div>
                <div className="nav-text">Home</div>
              </li>
              <li className="nav-item">
                <div className="nav-icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="nav-text">Favoris</div>
              </li>
              <li className="nav-item">
                <div className="nav-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="nav-text">Réservations</div>
              </li>
              <li className="nav-item">
                <div className="nav-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="nav-text">Mon compte</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-center slogan" style={{ fontFamily: "Caveat" }}>
          Faites place à l'évasion
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Destination (pays, région, ville)"
              className="p-4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-light mx-2">
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Header;
