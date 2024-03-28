import { useState } from 'react'
import SideBar from './components/SideBar'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  )
}

export default App
