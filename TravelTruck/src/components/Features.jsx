import CamperHasVehicles from "../components/CamperHasVehicles.jsx";
import css from "../styles/camperCard.module.css";
import Form from "../components/Form.jsx"

export default function Features({ camper }) {
  console.log("camper in features:", camper);
  return (
    <>
      <div className={css.main}>
        <div className={css.leftSide}>
          <div className={css.campersEqpDiv}>
            <CamperHasVehicles camper={camper} />
          </div>
          <div>
            <h3 style={{ marginTop: "16px", marginBottom: "16px" }}>
              Vehicle Details
            </h3>
            <p className={css.devider}></p>

            <table>
              <tbody className={css.tableBody}>
                <tr className={css.detailItem}>
                  <td className={css.item}>Form</td>
                  <td>{camper.form}</td>
                </tr>
                <tr className={css.detailItem}>
                  <td className={css.item}>Length</td>
                  <td>{camper.length}</td>
                </tr>
                <tr className={css.detailItem}>
                  <td className={css.item}>Width</td>
                  <td>{camper.width}</td>
                </tr>
                <tr className={css.detailItem}>
                  <td className={css.item}>Height</td>
                  <td>{camper.height}</td>
                </tr>
                <tr className={css.detailItem}>
                  <td className={css.item}>Tank</td>
                  <td>{camper.tank}</td>
                </tr>
                <tr className={css.detailItem}>
                  <td className={css.item}>Consumption</td>
                  <td>{camper.consumption}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={css.rightSide}>
         <Form/>
        </div>
      </div>
    </>
  );
}
