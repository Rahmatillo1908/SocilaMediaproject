import PostShare from "../PostShare/PostShare"
import "./PostSide.css"
import Posts from "../Posts/Posts.jsx"
const PostSide = () => {
  return (
    <div className="postSide">
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide