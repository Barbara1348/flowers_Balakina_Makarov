import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import AboutUs from "./components/AboutUs/AboutUs"
import ClientsChoice from "./components/ClientsChoice/ClientsChoice"
import Customers from "./components/Customers/Customers"
import OnSale from "./components/OnSale/OnSale"
import Products from "./components/Products/Products"
import Steps from "./components/Steps/Steps"
import Title from "./components/Title/Title"
import Advertisement from "./components/Аdvertisement/Advertisement"
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
          <Advertisement/>
          <OnSale/>
          <Customers/>
          <AboutUs/>
          <Steps/>
        <Footer/>

        </main>
      </div>
    </>
  )
}

export default HomePage
