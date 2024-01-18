import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function MyApp(){
  return(
    <div>
      <h1>Hi from the function.</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props:{
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  "Click me to Visit Google"
)

const anotherElement = (
  <a href="https://google.com" target = "_blank">Google pe chalo</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    /* <App /> */
    // <MyApp />
    reactElement
    // anotherElement
)
