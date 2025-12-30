import Header from "../../components/Header.jsx";
import css from "../../styles/CamperDetails.module.css";
import star from "../../assets/icons/Rating.svg";
import map from "../../assets/icons/map.svg";

export default function CamperDetails({ camper }) {
  return (
    <>
      <Header />
      <div className={css.name}>
        <h3 className={css.camperName}>{camper.name}</h3>
        <div>
          <img src={star} className={css.rating} alt="star" />
          {camper.rating}({reviewsLenght} reviews)
          <img src={map} className={css.location} />
          <span>{camper.location}</span>
        </div>
        <h3>€{camper.price}.00</h3>
      </div>
      <div>
        {camper.gallery.map((image) => {
          return (
            <li>
              <img src={image.thumb} alt="image" />
            </li>
          );
        })}
      </div>
      <p>{camper.description}</p>
      <navbar>
        <a href="*" className={css.features}>
          Features
        </a>

        <a href="*" className={css.reviews}>
          Reviews
        </a>
      </navbar>
      <p className={css.devider}></p>
      <div>{}</div>
    </>
  );
}
