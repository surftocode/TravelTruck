import star from "../assets/icons/Rating.svg";
import heart from "../assets/icons/Heart.svg";
import map from "../assets/icons/Map.svg";
import css from "../styles/camperCard.module.css";
import AC from "../assets/icons/AC.svg";
import TV from "../assets/icons/TV.svg";
import bathroom from "../assets/icons/Bathroom.svg";
import kitchen from "../assets/icons/Kitchen.svg";
import radio from "../assets/icons/radio.svg";
import microwave from "../assets/icons/lucide_microwave.svg";
import gas from "../assets/icons/petrol.svg";
import water from "../assets/icons/ion_water-outline.svg";

//Bu komponent her bir karavanda tekrar eden kart bilgilerini içerir
export default function CamperCard({ camper, onClick }) {
  const reviewsLenght = camper.reviews.lenght;
  const camperImg = camper.gallery[0].thumb;
  const haveIt = {
    AC: AC,
    TV: TV,
    bathroom: bathroom,
    kitchen: kitchen,
    radio: radio,
    microwave: microwave,
    gas: gas,
    water: water,
  };
  const descArry = camper.description.split(" ", 10);
  const sumDesc = descArry.join(" ").toString();

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
        <div className={css.description}>{sumDesc}...</div>
        <div >
          {Object.entries(camper).map(([key, value]) => {
            if (value === true) {
              return (
                <div key={key} >
                  <img src={haveIt[key]} alt={key} />
                  <span>{key}</span>
                  
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
