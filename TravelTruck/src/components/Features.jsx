import CamperHasVehicles from "../components/CamperHasVehicles.jsx";
import css from "../styles/camperCard.module.css";

export default function Features({ camper }) {
  console.log("camper in features:", camper);
  return (
    <>
      <div className={css.campersEqpDiv}>
        <CamperHasVehicles
          camper={camper}
          style={{ widht: "527px", height: "104px" }}
        />
      </div>

      <div>
        <h3 style={{ marginTop: "32px", marginBottom: "32px" }}>
          Vehicle Details
        </h3>
        <p className={css.devider}></p>
        <div className={css.vehicleDetails}>
          <ul key={camper.id} >
            <li className={css.detailItem}>
              <p>Form</p> {camper.form}
            </li>
            <li>
              <p>Length</p> {camper.length}
            </li>
            <li>
              <p>Width</p> {camper.width}
            </li>
            <li>
              <p>Height</p> {camper.height}
            </li>
            <li>
              <p>Tank</p> {camper.tank}
            </li>
            <li>
              <p>Consumption</p> {camper.consumption}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
