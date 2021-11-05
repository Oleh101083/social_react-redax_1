import React from 'react'
import Post from './Post'
import {addPostActionCreator,
upDataNewPostActionCreatore} from '../../../redux/profileReducer'
import classes from './Posts.module.css'


const Posts = (props) => {

let posts = props.posts.map(post=>(
    <Post 
    message={post.message} 
    countLike={post.countLike}
    key={post.id}
    />
))


let newPostElement = React.createRef()

let addPost = () => props.dispatch(addPostActionCreator());


let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = upDataNewPostActionCreatore(text);
    props.dispatch(action);
}

    return (
        <div className={classes.myposts}>
        My posts
            <div className={classes.add_post}>
                    <div>
                <textarea rows="10" cols="45" name="text"
                ref={ newPostElement }
                onChange={onPostChange}
                value={props.newPostText}
                />
                    </div>
                    <div>
                <button onClick={ addPost }>Add post</button>
                <button>Remove</button>
                    </div>
            </div>
                <div className={classes.posts}>
                { posts }
                </div>
        </div>
    )
}

export default Posts
