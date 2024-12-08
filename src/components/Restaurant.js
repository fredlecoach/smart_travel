import mer from '../assets/mer.jpg';
import montagne from '../assets/montagne.jpg';
import paysan from '../assets/paysan.jpg';
import bistrot from '../assets/bistrot.jpg';
import brunch from '../assets/brunch.jpg';
import vegetarien from '../assets/vegetarien.jpg';
import vignoble from '../assets/vignoble.jpg';

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
  },
  {
    id: 2,
    name: "Chez papi",
    image: paysan,
    address: "12 rue de pépé",
    place: "Strasbourg",
    phone: "03 45 67 89 01",
    email: "paysan@chezpapi.com",
    stars: "🌟🌟"
  },
  {
    id: 2,
    name: "La bonne franquette",
    image: bistrot,
    address: "12 rue de la bonne franquette",
    place: "Rouen",
    phone: "02 65 45 98 67",
    email: "lbf@yahoo.fr",
    stars: "🌟"
  },
  {
    id: 2,
    name: "Le pti dej'",
    image: brunch,
    address: "12 rue de la montagne",
    place: "Paris",
    phone: "01 23 45 67 89",
    email: "restaurant@pti-dej.com",
    stars: "🌟🌟"
  },
  {
    id: 2,
    name: "La jungle",
    image: vegetarien,
    address: "12 rue de la montagne",
    place: "Paris",
    phone: "01 23 45 67 89",
    email: "restaurant@lajungle.com",
    stars: "🌟"
  },
  {
    id: 2,
    name: "Pinot noir",
    image: vignoble,
    address: "12 rue de la montagne",
    place: "Paris",
    phone: "01 23 45 67 89",
    email: "restaurant@pinotNoir.com",
    stars: "🌟🌟🌟"
  }
];

export default function RestaurantList() {
  return (
    <div className="d-flex flex-wrap justify-content-evenly mt-5">
      {restaurants.map((resto) => (
        <div className="card m-2 " style={{ width: "20rem" }} key={resto.id}>
          <img src={resto.image} alt={`${resto.name}`} className="card-img-top object-fit-cover h-100" />
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
