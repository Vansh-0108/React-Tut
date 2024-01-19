import { useState } from 'react'
import './App.css'

import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>React Router</h1>
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  )
}

export default App
