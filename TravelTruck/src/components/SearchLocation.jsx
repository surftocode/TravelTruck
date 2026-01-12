const SearchLocation = ({ datas }) => {
  console.log("data bilgisi:", datas);
  return (
    <ul>
      {datas.map(({ location, index, id }) => (
        <li key={index}>
          <a href={`/catalog/${id}`} target="_blank" />
          {location}
        </li>
      ))}
    </ul>
  );
};

export { SearchLocation };
