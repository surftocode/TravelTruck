import AC from "../public/assets/icons/AC.svg";
import TV from "../public/assets/icons/TV.svg";
import bathroom from "../public/assets/icons/Bathroom.svg";
import kitchen from "../public/assets/icons/Kitchen.svg";
import radio from "../public/assets/icons/radio.svg";
import microwave from "../public/assets/icons/lucide_microwave.svg";
import gas from "../public/assets/icons/petrol.svg";
import water from "../public/assets/icons/ion_water-outline.svg";
import refrigarator from "../public/assets/icons/solar_fridge-outline.svg";
import css from "../styles/CamperHasVehicles.module.css";


const haveIt = {
  AC: AC,
  TV: TV,
  bathroom: bathroom,
  kitchen: kitchen,
  radio: radio,
  microwave: microwave,
  gas: gas,
  water: water,
  refrigerator: refrigarator,
};

export default function CamperHasVehicles({ camper }) {
  return (
    <>
      {Object.entries(camper).map(([key, value]) => {
        if (value === true) {
          return (
            <div key={key} className={css.campersEqp}>
              <img src={haveIt[key]} alt={key} className={css.campersEqpIcon} />
              <span className={css.campersEqpname}>{key}</span>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
