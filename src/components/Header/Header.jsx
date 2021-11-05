import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <img 
            className={classes.logo}
            src='https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png'
            alt='logo' />
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>GALERY</li>
            <li>CONTACTS</li>
        </ul>
        </div>
    )
}

export default Header
