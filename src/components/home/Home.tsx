
import { CardDefault } from "../listings/CardDefault"
import Navbar from "../navbar/Navbar"
import style from "./home.module.css"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className={style.Home}>
        <Navbar/>
    </div>
    <CardDefault/>
    </div>
  )
}
