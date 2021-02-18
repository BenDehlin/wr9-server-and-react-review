import axios from "axios"
import { useState, useEffect } from "react"
import {connect} from 'react-redux'

const Posts = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const addPost = () => {
    axios
      .post("/api/post", {
        post_title: "new title",
        post_content: "new content",
      })
      .then((res) => setPosts(res.data))
      .catch(err => console.log(err))
  }
  console.log(props)
  return (
    <div>
      {props.user && <button onClick={addPost}>Add Post</button>}
      {posts.map((e) => (
        <div>
          <p>POST TITLE: {e.post_title}</p>
          <p>POST AUTHOR: {e.email}</p>
        </div>
      ))}
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return state.authReducer
// }

export default connect((state) => state.authReducer)(Posts)

// this.state = {
//     posts: []
// }

// this.setState({posts: res.data})
