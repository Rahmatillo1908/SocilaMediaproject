import "./LogoSearch.css"
import Logo from "../../img/logo.png"
import {UilSearch} from "@iconscout/react-unicons"
import { Link } from "react-router-dom"
const LogoSearch = () => {
  return (
    <Link to="/" className="logoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch/>
        </div>
      </div>
    </Link>
  )
}

export default LogoSearch