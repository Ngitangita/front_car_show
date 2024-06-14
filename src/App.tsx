import Home from "./components/home/Home"
import Listing from "./components/listings/Listing"
import PostCar from "./components/listings/PostCar"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutForm from "./auth/CheckoutForm";

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/singUp" element={<CheckoutForm/>} />
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/addCars" element={<PostCar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
