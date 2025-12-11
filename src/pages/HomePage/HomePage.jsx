import Header from "../components/Header/Header"
import ClientsChoice from "./components/ClientsChoice/ClientsChoice"
import Products from "./components/Products/Products"
import Title from "./components/Title/Title"
import style from "./HomePage.module.css"

function HomePage() {

  return (
    <>
      <div className={style.html}>
        <Header />
        <main className={style.main}>
          <Title />
          <Products/>
          <ClientsChoice/>
        </main>
      </div>

    </>
  )
}

export default HomePage
