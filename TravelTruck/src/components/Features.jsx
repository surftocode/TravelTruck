import CamperHasVehicles from "../components/CamperHasVehicles.jsx";
import camperList from "../assets/data/campersList.json";

export default function Features(camper) {
  return (
    <>
      <div>
        <CamperHasVehicles
          camper={camper}
          style={{ widht: "527px", height: "104px" }}
        />
      </div>
      <div>
        <h3>Vehicle Details</h3>
      </div>
    </>
  );
}
