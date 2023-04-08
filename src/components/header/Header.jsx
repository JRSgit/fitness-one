import React from 'react'
import './Header.css'

import Logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="header">
      <img className='logo' src={Logo} alt="logo" />

      <ul className='header-menu'>
        <li>Home</li>
        <li>Programas</li>
        <li>Why us</li>
        <li>Planos</li>
        <li>Comentarios</li>
      </ul>
    </div>
  )
}

export default Header