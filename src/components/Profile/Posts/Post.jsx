import React from 'react'
import classes from './Post.module.css'

const Post = props => {
    return (
        <div className={classes.item}>
                    <img 
        className={classes.avatar}
        src='https://clicknathan.com/wp-content/uploads/2013/07/avatar-2.jpg'
        alt='avatar'
        />
                    {props.message}
            <div>
            <span>{props.countLike} &nbsp; Likes </span>
            </div>
        </div>
       
    )
}

export default Post
