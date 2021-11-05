import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.wrapper}>
          <img 
        className={classes.avatar}
        src='https://clicknathan.com/wp-content/uploads/2013/07/avatar-2.jpg'
        alt='avatar'
          />
        </div>
    )
}

export default ProfileInfo
