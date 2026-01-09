import css from "../../src/styles/camperCard.module.css"
export default function Form() {
    return (
        <>
         <div className={css.title}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </div>
          <form method="post" autoComplete="on">
            <input
              id="name"
              name="name"
              placeholder="Name*"
              onChange={(e) => e.target.value}
            ></input>

            <input
              id="email"
              name="email"
              placeholder="Email*"
              onChange={(e) => e.target.value}
            ></input>
            <input
              id="email"
              name="email"
              placeholder="Booking date*"
              onChange={(e) => e.target.value}
            ></input>
           
          <textarea onChange={(e)=>e.target.value}   name="commit" rows="5" cols="30" placeholder="Commit">

</textarea>

            <button className={css.searchBtn}>Send</button>
          </form></>
    )
}
