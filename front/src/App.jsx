import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import All from "./Components/All"
import BestSellers from './Components/BestSellers'
import NewArrivals from "./Components/NewArrivals"
import Promotions from "./Components/Promotions"
import Register from "./Components/Register"
import Login from "./Components/Login"
import WishList from './Components/WishList'
import Cart from './Components/Cart'

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
