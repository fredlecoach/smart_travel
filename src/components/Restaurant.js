import mer from '../assets/mer.jpg';
import montagne from '../assets/montagne.jpg';

const restaurants = [
  {
    id: 1,
    name: "Le restaurant de la mer",
    image: mer,
    address: "12 rue de la mer",
    place: "Paris",
    phone: "01 23 45 67 89",
    email: "restaurant@mer.com",
    stars: "🌟🌟🌟"
  },
  {
    id: 2,
    name: "Le restaurant de la montagne",
    image: montagne,
    address: "12 rue de la montagne",
    place: "Paris",
    phone: "01 23 45 67 89",
    email: "restaurant@montagne.com",
    stars: "🌟🌟🌟"
  }
];

export default function RestaurantList() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {restaurants.map((resto) => (
        <div className="card m-2" style={{ width: "18rem" }} key={resto.id}>
          <img src={resto.image} alt={`${resto.name}`} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{resto.name}</h5>
            <ul className="list-unstyled">
              <li>Étoiles : {resto.stars}</li>
              <li>Lieu : {resto.place}</li>
              <li>Adresse : {resto.address}</li>
              <li>Téléphone : {resto.phone}</li>
              <li>Email : <a href={`mailto:${resto.email}`}>{resto.email}</a></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
