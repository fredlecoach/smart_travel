export default function Reservations(){
  return (
    <div className="container mt-5">
      <h1 style={{ color: 'red'}} >Mes voyages</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Depart</th>
            <th>Arrivée</th>
            <th>Nombre de passagers</th>
            <th>Aéroport de départ</th>
            <th>Aéroport d'arrivée</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paris</td>
            <td>10h00</td>
            <td>12H00</td>
            <td>2</td>
            <td>Londres</td>
            <td>Paris</td>
            <td>100€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}