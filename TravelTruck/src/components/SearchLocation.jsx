import CamperCard from "./camperCard";

const SearchLocation = ({ datas }) => {
  console.log("data bilgisi:", datas);
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {datas.map((location, index) => (
        <li key={index}>{location.location}</li>
      ))}
    </ul>
  );
};

export { SearchLocation };
