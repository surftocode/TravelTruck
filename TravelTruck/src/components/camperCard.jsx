import star from "../assets/icons/Rating.svg";
import heart from "../assets/icons/Heart.svg";
import map from "../assets/icons/Map.svg";
import css from "../styles/camperCard.module.css";


//Bu komponent her bir karavanda tekrar eden kart bilgilerini içerir
export default function CamperCard({ camper }) {
  const reviewsLenght = camper.reviews.lenght;
  const camperImg = camper.gallery[0].thumb;
  return (
    <div className={css.card}>
      <img src={camperImg} alt={camper.name} className={css.camperImg} />
      <div className={css.camperExpDiv}>
        <div className={css.camperExp}>
          <h3 className={css.camperName}>{camper.name}</h3>
         
            <h3>€{camper.price}.00</h3>
            <img src={heart} className={css.fav} />
         
        </div>
        <div className={css.rateDiv}>
          <img src={star} className={css.rating} alt="star" />
          {camper.rating}({reviewsLenght} reviews)
          <img src={map} className={css.location} />
          <span>{camper.location}</span>
        </div>
      </div>
    </div>
  );
}
