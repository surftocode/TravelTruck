import React from "react";
import css from "../styles/camperCard.module.css";
import Form from "../components/Form.jsx";
import star from "../assets/icons/Rating.svg";

export default function Reviews({ camper }) {
  console.log("camper in reviews:", camper);

  return (
    <>
      <div className={css.main}>
        <div className={css.leftSide}>
          <div>
            {camper.reviews.map((r) => {
              return (
                <li key={r.index}>
                  <h4>{r.reviewer_name}</h4>
                  <img src={star} />
                  <p>{r.comment}</p>
                </li>
              );
            })}
          </div>
        </div>
        <div className={css.rightSide}>
          <Form />
        </div>
      </div>
    </>
  );
}
