import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Info } from './component/info'

function App() {
  const [count, setCount] = useState(0)
  const [text , setText] = useState("")  // state at parent 

  const incVal = () => {
    setCount(count + 1)
  }

  const [subject, newSubject] = useState(["Maths", "Science", "Hindi"])



  return (

    <div>
      <h1> Counter:{count}</h1>
      <button onClick={incVal}>Click me </button>
      <Info counterpass={count} subject={subject} ontextChange = {setText} />
      <p>Hii Sir {text}</p>
     
      
      
    </div>


  )
}




export default App
