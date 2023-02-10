import React from 'react'
import Logo from '../../imgs/usource.png'
import './Sidebar.css'

import {SidebarData} from '../Data/Data'
const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>Usource</span>
        </div>
    </div>
  )
}

export default Sidebar