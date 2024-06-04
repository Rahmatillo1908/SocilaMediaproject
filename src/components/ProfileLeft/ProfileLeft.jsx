import FollowersCard from "../FollowersCard/FollowersCard"
import LogoSearch from "../LogoSearch/LogoSearch"
import InfoCard from "../InfoCard/InfoCard.jsx"
const ProfileLeft = () => {
  return (
    <div className="profileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft