import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="flex flex-wrap items-center min-h-screen">
      <div className="w-full">
        <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
          {/* <ThemeSwitcher /> */}
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}

        </div>
      </div>
    </div>

  )
}

export default App
