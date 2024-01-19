import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Layout from './Layout.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import GitHub, { gitHubInfoLoader } from './components/github/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contact' element = {<ContactUs />} />
      <Route path = 'user/:userid' element = {<User />} />
      <Route loader = {gitHubInfoLoader} path = 'github' element = {<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
