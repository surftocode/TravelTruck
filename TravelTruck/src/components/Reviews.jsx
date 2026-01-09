import React from "react";
import css from "../styles/camperCard.module.css";
import Form from "../components/Form.jsx";
import star from "../assets/icons/Rating.svg";
import name from "../assets/icons/name.svg";

export default function Reviews({ camper }) {
  console.log("camper in reviews:", camper);
  const index = camper.reviews.forEach((r) => {
    return r.index;
  });
  return (
    <>
      <div className={css.main}>
        <div className={css.RevLeftSide}>
          <div>
            {camper.reviews.map((r, index) => {
              return (
                <li key={index}>
                  <div className={css.Rname}>
                    <img src={name} className={css.image} />
                    <p
                      style={{
                        fontWeight: "600px",
                        fontStyle: "Semi Bold",
                        fontSize: "24px",
                        color: "var(--orange)",
                      }}
                      className={css.nameLetter}
                    >
                      {r.reviewer_name[0]}
                    </p>
                    <h2>{r.reviewer_name}</h2>
                    {/* <img src={star}/> */}

                    <div>
                      <p>{r.comment}</p>
                    </div>
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
