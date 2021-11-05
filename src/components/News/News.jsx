import React from 'react'
import Post from '../Profile/Posts/Post'
import {addNewsCreator,
    upNewsPostCreator} from '../../redux/newsPostReducer'

const News = props => {

let newPostElement = React.createRef()

let posts = props.newPostPage.posts.map(post=>(
    <Post 
    message={post.message} 
    countLike={post.countLike}
    key={post.id}
    />
))

let newPost = () => props.dispatch(addNewsCreator())   

let onPostChange = () =>{
    let text = newPostElement.current.value
    let action = upNewsPostCreator(text)
    props.dispatch(action)
}
    return (
        <div style={{ padding: '10px'}}>
            <h1>News</h1>
            <textarea
            ref={ newPostElement }
            onChange={onPostChange}
            value={props.newPostPage.newPostText}
            ></textarea>
            <button onClick={ newPost }>Add news</button>
            <div>{ posts }</div>
        </div>
    )
}

export default News
