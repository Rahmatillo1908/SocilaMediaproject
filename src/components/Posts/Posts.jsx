import "./Posts.css"
import {PostsData} from "../../Data/PostsData"
import Post from "../Post/Post.jsx"
const Posts = () => {
  return (
    <div className="posts">
        {PostsData.map((post,id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts