import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <div className={classes.nav}>
            <ul className={classes.nav_ul}>
                <li>
                <NavLink to='/profile'
                activeClassName={classes.activeLink}
                >Profile</NavLink>
                </li>
                <li>
                <NavLink to='/dialogs'
                activeClassName={classes.activeLink}
                > Messages</NavLink>
                </li>
                <li>
                <NavLink to='/news'
                activeClassName={classes.activeLink}
                > News</NavLink>
                </li>
                <li>
                <NavLink to='/music'
                activeClassName={classes.activeLink}
                >    
                    Music
                </NavLink>
                </li>
                
                <li>Setting</li>
            </ul>
        </div>
    )
}

export default Nav
