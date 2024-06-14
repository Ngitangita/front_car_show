import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="w-screen h-24 flex flex-row justify-between items-center text-white px-16">
      <span className="n text-2xl font-bold"><li  className="inline-block"><Link to="/">Voiture</Link></li></span>
      <ul  className="w-1/2 flex flex-row justify-between items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addCars" >AddCars</Link></li>
        <li><Link to="/listing" > Listings</Link></li>
        <li><Link to="/blog" > Blog</Link></li>
        <li><Link to="/shop" >Shop</Link></li>
        <li><Link to="/pages" > Pages</Link></li>
        <li><ul className="w-20 flex flex-row gap-3 items-center">
          <li><Link to="/singUp" >Login</Link></li>
          <li><Link to="/singUp" >SingUp</Link></li>
        </ul></li>
      </ul>
    </div>
  )
}
