import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import './styles/App.css'


let App = () =>{


    return(
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Content />
            <Footer />
        </div>
        
    )  
}
export default App