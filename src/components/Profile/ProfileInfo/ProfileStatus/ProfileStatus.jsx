import React from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatus = () => {
    return <div className={classes.wrapper}>
        <ul className={classes.ul_p}>
            <li>Name</li>
            <li>Age</li>
            <li>mail</li>
        </ul>
    </div>
}

export default ProfileStatus
