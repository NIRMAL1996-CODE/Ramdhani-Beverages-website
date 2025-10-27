

import Featuresection from "./sections/Featuresection"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Mission from "./sections/Missionsection"
import Navbar from "./sections/Navbar"
import Productsection from "./sections/Productsection"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Mission/>
      <Productsection/>
      <Featuresection/>
      <Footer/>
    </div>
  )
}

export default App