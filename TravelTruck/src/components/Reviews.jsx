import React from "react";
import css from "../styles/FeatureRevDiv.module.css";
import Form from "../components/Form.jsx";


export default function Reviews({ camper }) {
  console.log("camper in reviews:", camper);

  return (
    <>
      <div className={css.main}>
        <div className={css.revLeftSide}>
          <div>
            {camper.reviews.map((r, index) => {
              return (
                <li key={index}>
                  <div className={css.Rname}>
                    <p className={css.nameLetter}>{r.reviewer_name[0]}</p>
                    <h2>{r.reviewer_name}</h2>
                    {/* <img src={star}/> */}
                  </div>
                  <div>
                    <p>{r.comment}</p>
                  </div>

                  <div></div>
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
