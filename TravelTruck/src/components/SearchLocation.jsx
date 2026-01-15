import CamperCard from "./camperCard";

const SearchLocation = ({ datas }) => {
  console.log("data bilgisi:", datas);
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {datas.map((item, index) => (
        <li key={index}>{item.location}</li>
      ))}
    </ul>
  );
};

export { SearchLocation };
