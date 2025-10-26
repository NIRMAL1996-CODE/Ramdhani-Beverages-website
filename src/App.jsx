
import Featuresection from "./sections/Featuresection"
import Home from "./sections/Home"
import Mission from "./sections/Missionsection"
import Navbar from "./sections/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Mission/>
      <Featuresection/>
    </div>
  )
}

export default App