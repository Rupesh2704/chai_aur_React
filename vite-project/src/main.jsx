import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'

// function MyApp() {
//   return (
//     <div>

//       <h1>Prachi Dahibhate</h1>
//     </div>
//   )
// }

// const reactElement = React.createElement(
//   'a',
//   {href : 'https://google.com' , target:'_blank'},
//   'click me to visit google.com'
// )

createRoot(document.getElementById('root')).render(
  <App/>
)
