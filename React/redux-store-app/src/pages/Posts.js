import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getPosts} from '../store/posts'

export default function Posts() {
  
  const dispatch = useDispatch();
  const {posts}= useSelector(state=> ({
      posts: state.postsStore.posts
  }))
  console.log(posts)
 
  useEffect(() => {
     dispatch(getPosts())
  }, [dispatch])
  

  return (
    <div>{posts.map((item) => (
        <div>
          <h1> {item.title} </h1>
          <p> {item.body} </p>
        </div>
      ))}</div>
  )
}
