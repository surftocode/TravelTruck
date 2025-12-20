import Button from "../../components/Button";
import Header from "../../components/Header";
import camper from "../../assets/images/camper.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-body">
        <img src={camper} alt="camper-pic" width="1440" height="696" />
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Button />
      </div>
    </>
  );
}
