import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import All from "./Components/All"
import BestSellers from './Components/BestSellers'
import NewArrivals from "./Components/NewArrivals"
import Promotions from "./Components/Promotions"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
