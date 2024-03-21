import React from 'react'
import './ThemeButton.css'
import { Button } from "antd"
import { HiOutlineSun, HiOutlineMoon} from "react-icons/hi"

function ThemeButton({ darktheme, toggleTheme}) {
  return (
    <div className='theme-button'>
        <Button onClick={toggleTheme}>
            {darktheme ? <HiOutlineSun /> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

export default ThemeButton