import React, { useState } from 'react'
import './Navbar.css'

import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'

import search_icon from '../../assets/search.png'
import upload_icon from "../../assets/upload.png"
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import jack from '../../assets/jack.png'

const Navbar = () => {
    const [sideMenu,setSideMenu] =useState();

    const handleclick = async () => {
        const value_converter = ``
        await fetch (value_converter).then(res=>res.json()).then(data=>setSideMenu(data.items[0]))
    }

  return (

    <nav className='navbar-header'>
        <div className='navbar-content'>
            <img className='navbar-menu' src={menu} alt="" onClick={(setSideMenu)}/>
            <a><img className='navbar-logo' src={logo} alt="" /></a>
        </div>

        <div className='navbar-middle-search'>
            <div className='navbar-middle-search-icon'>
                <input type="text" placeholder='search' />
                <img src={search_icon} alt="" />
            </div>
        </div>


        <div className='navbar-left-section'>
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon  } alt="" />
            <img src={jack} alt="" className='user-icon'/>
        </div>
    </nav>
  )
}

export default Navbar