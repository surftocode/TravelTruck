
import css from "../styles/button.module.css";



export default function Button({onClick}) {

  return (
    <>
      <button className={css.home_button} onClick={onClick}>View Now</button>
    </>
  );
}
