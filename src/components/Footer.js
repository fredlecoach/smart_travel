import '../styles/Footer.css'

export default function Footer(){
  return (
    <>
    <div className="row row-cols-lg-3 bg-dark p-3 text-light d-flex justify-content-around footer-css mt-5">
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Des voyages d'exception <i class="bi bi-airplane-fill fs-5"></i></h5>
        <p>Vous faire plaisir est notre maître mot <i class="bi bi-heart"></i></p>
      </div>
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Les meilleurs réductions <i class="bi bi-tags-fill fs-5"></i></h5>
        <p>Du haut de gamme à des prix bas de gamme <i class="bi bi-gem"></i></p>
      </div>
      <div className="col d-flex justify-content-center flex-column text-center">
        <h5>Nos experts à votre service <i class="bi bi-person-rolodex fs-5"></i></h5>
        <p>Nos conseillers disponibles 24h/24 <i class="bi bi-phone"></i></p>
      </div>
    </div>
    {/* réseaux sociaux */}
    <div className="d-flex justify-content-center bg-dark text-light p-3">
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-instagram fs-5"></i>
      </div>
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-facebook fs-5"></i>
      </div>
      <div className="d-flex justify-content-center mx-2">
        <i className="bi bi-twitter-x fs-5"></i>
      </div>
    </div>

    </>
  )
}

// const restaurants = [
//   {
//     id: 1, // Ajout d'une propriété "id" pour chaque objet
//     name: "Le restaurant de la mer",
//     address: "12 rue de la mer",
//     place: "Paris",
//     phone: "01 23 45 67 89",
//     email: "restaurant@mer.com",
//     stars: "🌟🌟🌟" // Changer "star" en "stars" pour rester cohérent
//   },
//   {
//     id: 2,
//     name: "Le restaurant de la montagne",
//     address: "12 rue de la montagne",
//     place: "Paris",
//     phone: "01 23 45 67 89",
//     email: "restaurant@montagne.com",
//     stars: "🌟🌟🌟"
//   }
// ];

// export function RestaurantList() {
//   return (
//     <div>
//       {restaurants.map((resto) => (
//         <ul key={resto.name}>
//           <li>Nom : {resto.name}</li>
//           <li>Étoiles : {resto.stars}</li>
//           <li>Lieu : {resto.place}</li>
//           <li>Adresse : {resto.address}</li>
//           <li>Téléphone : {resto.phone}</li>
//           <li>Email : {resto.email}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }


