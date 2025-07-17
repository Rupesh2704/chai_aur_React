import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  const [msg, setMsg] = useState('');


  const incVal = () => {

    if (counter < 20) {

      counter = counter + 1;
      setCounter(counter)

      if (counter === 20) {
        setMsg("Counter can't be more then 20")
      }

    }

    console.log("clicked", counter)
  };

  const decVal = () => {

    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)

      if (counter === 0) {
        setMsg("Value reached 0")
      }
    }



  };




  return (
    <>
      <h1>Rupesh Dahibhate</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={incVal} disabled={counter == 20}>Add value</button>
      <br />
      <br />
      <button onClick={decVal} disabled={counter==0}>Remove Value</button>
      {msg && <p style={
        {
          color:'red',
          fontSize:'25px'

        }
      } >{msg}</p>}

    </>
  )
}

export default App
