import React from 'react'
import {Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from  './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'

import './styles/App.css'


let App = (props) =>{

    return(
    <div className='app-wrapper'>
        <Header />
        <Nav />
                <Route render={() => <Dialogs 
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                    />} path='/dialogs'
                    />
                <Route render={() => <Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                />}
                    path='/profile'
                    />
            <Route render={()=><News
            newPostPage={props.state.newPostPage} 
            dispatch={props.dispatch}
            />} 
            path='/news' />
                <Route render={()=> <Music
                musicPostPage={props.state.musicPostPage}
                dispatch={props.dispatch}
                />} path='/music'/>  
        <Footer />
    </div>
        
    )  
}
export default App