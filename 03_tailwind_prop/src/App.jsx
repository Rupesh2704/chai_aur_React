import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='italic font-thin text-red-800 bg-green-400' >Hii you are on Rupesh Code</h1>
      <Card name = "Rupesh"/>
      <Card name = "Prachi"/>
      <Card name = "Shekhar"/>
      <Card name = "Nilima"/>



    </>
  )
}

export default App
