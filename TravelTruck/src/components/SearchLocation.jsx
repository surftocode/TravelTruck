export default function SearchLocation({ data }) {
  console.log("data bilgisi:", data);
  return (
    <>
      <table>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.location} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
