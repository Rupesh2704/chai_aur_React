
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import Paragraph from './Components/Paragraph'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Rupesh</h1>

      <Login />
      <Paragraph/>
      <Profile/>

    </UserContextProvider>
  ) 
}

export default App
