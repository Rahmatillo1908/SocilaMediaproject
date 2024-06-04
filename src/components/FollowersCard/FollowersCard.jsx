import { Followers } from "../../Data/FollowersData"
import "./FollowersCard.css"
const FollowersCard = () => {
  return (
    <div className="followersCard">
        <h3>Who is following you</h3>

        {Followers.map((follower,id)=>{
          return (
            <div className="follower">
              <div>
                <img src={follower.img} className="followerImg" alt="followerImage" />
                <div className="name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
                </div>
              </div>
              <button className="button">Follow</button>
            </div>
          )
        })}
    </div>
  )
}

export default FollowersCard