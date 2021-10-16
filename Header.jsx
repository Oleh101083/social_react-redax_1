import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <img 
            style={{height:'50px',margin:'5px'}}
            src='https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png' />
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
