import React, { useState } from 'react'
import './SideBar.scss'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai' 
import { SideBarData } from './SideBarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons'

function SideBar() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <IconContext.Provider value= {{color: '#fff'}}>
      <div className='nav'>
        <Link className='navIcon' to='#'>
          <FaBars onClick = {showSidebar}/>
        </Link>
      </div>
      <nav className='sideBarNav' style={{ left: `${sidebar ? '0' : '-100%'}` }}>
        <div className='sideBarWrap'>
          <Link className='navIcon' to='#'>
            <AiOutlineClose onClick = {showSidebar}/>
          </Link>
          {SideBarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </nav>
    </IconContext.Provider>
  )
}

export default SideBar