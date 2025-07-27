import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Components/Homepage/Home.jsx'
import About, { aboutinfo} from './Components/About/About.jsx'
import { homepage } from './Components/Homepage/Home.jsx'

const router = createBrowserRouter((

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Home />} loader={homepage} />
      <Route path='/Home' element={<Home />} loader={homepage} />
      <Route path='/About' element={<About />} loader={aboutinfo}/>






    </Route>
  )

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
