import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from './ProfileInfo/ProfileStatus/ProfileStatus'
import Posts from './Posts/Posts'
import classes from './Profile.module.css'



const Profile = props => {

    return (
        <div className={classes.profile}>
          <div className={classes.flex_wrap} >
            <ProfileInfo />
            <ProfileStatus />
          </div>
        <Posts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
        </div>
    )
}

export default Profile
