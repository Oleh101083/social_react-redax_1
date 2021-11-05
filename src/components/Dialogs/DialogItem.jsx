import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = props =>{
 let path = '/dialogs/' + props.id
    return <NavLink 
                to={path}
                className={classes.item}>
                {props.name}
            </NavLink>
}

export default DialogItem
