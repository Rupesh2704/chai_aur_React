import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Addvalue = () => {

    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // This will not going to inc the value by +4 because usestate send the update on UI in the batches , thats why fiber come in picture , by using that we got more contorl over updation
    
    
    // What if you want to update like this only
    // setCount(prev => prev+1)
    // setCount(prev => prev+1)
    // setCount(prev => prev+1)

   

  }

  const decval = () => {

    setCount(count - 1)
  }



  return (
    <>

      <h1>Counter : {count}</h1>
      <button onClick={Addvalue}>Inc Value</button>
      <br />
      <br />
      <button onClick={decval}>Dec Value</button>

    </>
  )
}

export default App
