import { Link } from "react-router-dom"
import Cover from "../../img/cover.jpg"
import profileImage from "../../img/profileImg.jpg"
import "./ProfileCard.css"
const ProfileCard = () => {

  const  ProfilePage = true

  return (
    <div className="profileCard">
        <Link to="/profile" className="proileImages">
        <img src={Cover} alt="" />
        <img src={profileImage} alt="" /> 
        </Link>
      <div className="profileName">
        <span>Name UserName</span>
        <span>Senior</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>5</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>3</span>
              <span>Posts</span>
            </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>
          My Profile
        </span>}
        
    </div>
  )
}

export default ProfileCard