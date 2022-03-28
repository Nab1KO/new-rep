import React from 'react'
import logo from './img/logo-geomedi_1.png'

import cl from './Header.module.css'

const Header = (props) => {
  return (
    <header className={cl.header}>
      <img src="../src/Components/Header/img/logo-geomedi_1.png" alt="logo" />
      <img src={logo} alt="asd" />
    </header>
  )
}

export default Header
