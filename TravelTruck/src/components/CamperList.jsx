import camperList from "../assets/data/campersList.json";
import CamperCard from "./camperCard";
import css from "../styles/camperList.module.css";
import { useState, useEffect } from "react";
import LoadMoreBtn from "./LoadMoreBtn";

export default function CamperList() {
  const campers = camperList.items;
  const [campersPerPage, setCampersPerPage] = useState(4);
  const pageCampers = campers.slice(0, campersPerPage);
  // useEffect(() => {
  //   const campersToShow = campers.slice(0, campersPerPage);

  // }, [ campersPerPage]);
  // const pageCampers = campers.slice(0, campersPerPage);
  const handleLoadMore = () => {
    console.log("handleLoadMore çalıştı");
    setCampersPerPage((prev) => prev + 4);
  };

  return (
    <>
      {pageCampers.map((camper) => {
        return <CamperCard key={camper.id} camper={camper} />;
      })}
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}
