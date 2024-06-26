import "./Post.css"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
const Post = ({data,id}) => {
  return (
    <div className="post">
        <img src={data.img} alt="imagepost" />
        <div className="postReact">
            <img src={data.liked ? Heart : NotLike} alt="" />
            <img src={Share} alt="" />
            <img src={Comment} alt="" />
        </div>

        <span style={{color: "var(--gray)",fontSize:"12px"}} >{data.likes}</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post