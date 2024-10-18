import styled from "styled-components"

const StyledTitre= styled.h2`color: red ; border: 1px red solid ; text-align:center `

export default function Reservations({ reservations }) {
  return (
    <div className="container mt-5">
      <StyledTitre>Récapitulatif</StyledTitre>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Pays</th>
            <th>Départ</th>
            <th>Arrivée</th>
            <th>Nombre de passagers</th>
            <th>Durée du séjour</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? (
            reservations.map((resa) => (
              <tr key={resa.id}>
                <td>{resa.name || "Non spécifié"}</td>
                <td>{resa.country || "Non spécifié"}</td>
                <td>{resa.departTime || "Non spécifié"}</td>
                <td>{resa.arrivalTime || "Non spécifié"}</td>
                <td>{resa.passenger || "Non spécifié"}</td>
                <td>{resa.duree || "Non spécifié"}</td>
                <td>{resa.price ? `${resa.price} €` : "Non spécifié"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Aucun voyage enregistré</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
