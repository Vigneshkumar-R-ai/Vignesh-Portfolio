import React from 'react'
import './header.css'
import Vignesh from '../assets/vignesh11.jpg'
const Header = () => {
  return (
    <>
    <div id='header'>
<center>
    <h1>Vignesh Kumar</h1>
    <h2>MERN Stack Developer | Fresher</h2>
    <img src={Vignesh} alt='icon'></img>
</center>

    </div>
    
    
    </>
  )
}

export default Header