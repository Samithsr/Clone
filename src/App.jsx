import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='layout-container'>
        <Sidebar/>
        <div className='home-scroll-wrapper'>
        <Home/>
        </div>
         
      </div>
     
    </div>
  )
}

export default App 