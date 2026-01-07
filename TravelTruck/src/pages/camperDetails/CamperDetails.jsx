import Header from "../../components/Header.jsx";
import css from "../../styles/CamperDetails.module.css";
import star from "../../assets/icons/Rating.svg";
import map from "../../assets/icons/map.svg";
import { Route, useParams } from "react-router-dom";
import camperList from "../../assets/data/campersList.json";
import Features from "../../components/Features.jsx";
import Reviews from "../../components/Reviews.jsx";
import { useState } from "react";

export default function CamperDetails() {
  const params = useParams();
  const camper = camperList.items.find(({ id }) => id === params.id);
  console.log("params:", params);
  console.log("camper info:", camper);
  const reviewsLenght = camper.reviews.length;
  const [drop, setDrop] = useState("Features");

  const handleDrop = (section) => {
    setDrop(section);
    console.log("Dropped section:", section);
  };
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
              <li key={image.thumb}>
                <img src={image.thumb} alt="image" className={css.singleImg} />
              </li>
            );
          })}
        </div>
        <p className={css.desc}>{camper.description}</p>
        <div className={css.navbar}>
          <h3 onClick={() => handleDrop("Features")}> Features</h3>
          <h3 onClick={() => handleDrop("Reviews")}>Reviews</h3>
        </div>

        <p className={css.devider}></p>
        <div>
          {drop === "Features" && <Features camper={camper} />}
          {drop === "Reviews" && <Reviews id={camper} />}
        </div>
      </div>
    </>
  );
}
