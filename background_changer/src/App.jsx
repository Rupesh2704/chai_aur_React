import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")




  return (
    <div className='w-full h-screen  ' style={{ backgroundColor: color }} >

      <div className=' fixed flex flex-wrap justify-center bottom-48 inset-x-10  '>

        <div className='flex flex-wrap justify-center gap-10 bg-white rounded px-5 py-5'>

          <button className='px-4 py-2 bg-black text-white rounded-3xl outeline-none px-4' style={{backgroundColor : "Red"}} onClick={()=>{setColor("red")}} >Red</button>
          <button className='px-4 py-2 bg-black text-white rounded-3xl outeline-none px-4' style={{backgroundColor : "Red"}} onClick={()=>{setColor("Black")}} >Black</button>
          <button className='px-4 py-2 bg-black text-white rounded-3xl outeline-none px-4' style={{backgroundColor : "Red"}} onClick={()=>{setColor("blue")}} >Blue</button>






        </div>

      </div>

    </div>
  )
}

export default App
