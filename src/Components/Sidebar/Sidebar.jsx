import React from 'react'
import "./Sidebar.css"

import home_icon from "../../assets/home.png"
import gaming_icon from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import technology from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"


import tom from "../../assets/tom.png"
import simon from "../../assets/simon.png"
import gerard from "../../assets/gerard.png"
import cameron from "../../assets/cameron.png"
import jack from "../../assets/jack.png"
import Home from '../Pages/Home'

const Sidebar = () => {
  return (
    <div className='sidebar-header'>
        <div className='shortcut-link'>
            <div className='sidebar-link'>
                <img src={home_icon} alt="" />
                <p>Home</p>
            </div>

            <div className='sidebar-link'>
                <img src={gaming_icon} alt="" />
                <p>Gaming</p>
            </div>

            <div className='sidebar-link'>
                <img src={automobiles} alt="" />
                <p>Automobiles</p>
            </div>

            <div className='sidebar-link'>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>

            <div className='sidebar-link'>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>

            <div className='sidebar-link'>
                <img src={technology} alt="" />
                <p>Technology</p>
            </div>

            <div className='sidebar-link'>
                <img src={music} alt="" />
                <p>Music</p>
            </div>

            <div className='sidebar-link'>
                <img src={blogs} alt="" />
                <p>Blogs</p>
            </div>

            <div className='sidebar-link'>
                <img src={news} alt="" />
                <p>News</p>
            </div>
            <hr />
        </div>
        




        <div className='subscribe-header'>
            <h3>Subscribed</h3>

            <div className='subscribe-list'>
                <img src={jack} alt="" />
                <p>PewDiePie</p>
            </div>
            <div className='subscribe-list'>
                <img src={tom} alt="" />
                <p>MrBeast</p>
            </div>
            <div className='subscribe-list'>
                <img src={simon} alt="" />
                <p>Justin Bieber</p>
            </div>
            <div className='subscribe-list'>
                <img src={gerard} alt="" />
                <p>5-Minutes Crafts</p>
            </div>
            <div className='subscribe-list'>
                <img src={cameron} alt="" />
                <p>Nas Daily</p>
            </div>
        </div>  
    </div>
    
  )
}

export default Sidebar