import Header from "../../components/Header.jsx";
import css from "../../styles/CamperDetails.module.css";
import star from "../../assets/icons/Rating.svg";
import map from "../../assets/icons/map.svg";
import { useParams } from "react-router-dom";
import camperList from "../../assets/data/campersList.json";

export default function CamperDetails() {
  const params = useParams();
  const camper = camperList.items.find(({ id }) => id === params.id);
  console.log("params:", params);
  console.log("camper info:", camper);
  const reviewsLenght = camper.reviews.lenght;
  return (
    <>
      <div className={css.body}>
        <div className={css.name}>
          <h3 className={css.camperName}>{camper.name}</h3>
          <div>
            <img src={star} className={css.rating} alt="star" />
            {camper.rating}({reviewsLenght} reviews)
           
            <img src={map} className={css.location} />
            <span>{camper.location}</span>
          </div>
          <h3 className={css.price}>€{camper.price}.00</h3>
        </div>
        <div key={camper.id} className={css.image}>
          {camper.gallery.map((image) => {
            return (
              <li key={image.thumb} >
                <img src={image.thumb} alt="image" className={css.singleImg} />
              </li>
            );
          })}
        </div >
        <p>{camper.description}</p>
        <div>
          <a href="*" className={css.features}>
            Features
          </a>

          <a href="*" className={css.reviews}>
            Reviews
          </a>
        </div>

        <p className={css.devider}></p>
      </div>
    </>
  );
}
