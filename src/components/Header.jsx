

import React from 'react'

function Header({lightMode, setLightMode}) {
  return (
      <div className="header-wrapper">      
        <header className="header">
        <h1>Atmos</h1>
        <span className="sub-head">See the sky before it speaks</span>
      </header>
      <label className="switch">
        <input onChange={()=> setLightMode(!lightMode)} type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Header