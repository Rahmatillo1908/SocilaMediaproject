import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from "../TrendCard/TrendCard"
import { Link } from "react-router-dom"
const RightSide = () => {

  return (
    <div className="rightSide">
      <div className="navIcons">
        <Link to="/">
        <img src={Home} className="navIcon" alt="" />
        </Link>
        <Link to="/auth">
        <UilSetting style={{cursor:"pointer", color:"black"}} />
        </Link>
        <img className="navIcon" src={Noti} alt="" />
        <img className="navIcon" src={Comment} alt="" />
      </div>
      <TrendCard />
      <Link to="/auth">
        <button className="button">
        Sign Up
        </button>
      </Link>
    </div>
  )
}

export default RightSide