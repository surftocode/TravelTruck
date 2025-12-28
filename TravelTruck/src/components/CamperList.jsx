import camperList from "../assets/data/campersList.json";
import CamperCard from "./camperCard";
import css from "../styles/camperList.module.css";

export default function CamperList() {
  const campers = camperList.items;
  const startIndex = 0;

  return (
    <>
      {campers.map((camper) => {
        return <CamperCard key={camper.id} camper={camper} />;
      })}
    </>
  );
}
