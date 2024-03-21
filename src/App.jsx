
import './App.css'
import Chart from './components/charts/Chart'
import Chart2 from './components/charts/Chart2'


// import DaisuyNav from './components/daisuynav/DaisuyNav'
import Navber from './components/navber/Navber'
import Phones from './components/phones/Phones'
import PriceOptions from './components/priceoptions/PriceOptions'

function App() {
  
  return (
    <>
      <Navber></Navber>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <Chart2></Chart2>
      <Phones></Phones>
    </>
  )
}

export default App
