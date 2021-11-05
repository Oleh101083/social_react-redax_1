import React from 'react'
import Post from '../Profile/Posts/Post'
import {addMusicPostCreator,
    upNewMusicPostCreator} from '../../redux/musicPostReducer'



const Music = props => {
    
    let posts = props.musicPostPage.posts.map(post=>(
        <Post 
        message={post.message} 
        countLike={post.countLike}
        key={post.id}
        />
    ))

    let newPostText = React.createRef()
    let addPost = () => props.dispatch(addMusicPostCreator())

let onPostChange = () =>{
    let text = newPostText.current.value
    let action = upNewMusicPostCreator(text)
    props.dispatch(action)
}

    return (
        <div style={{padding: '10px'}}>
            <h1>Chat About Music</h1>
            <textarea 
            ref={ newPostText }
            onChange={onPostChange}
            value={props.musicPostPage.newPostText}
            ></textarea>
            <button  onClick={ addPost }>Add post</button>
            <div>{ posts }</div>
        </div>
    )
}

export default Music
