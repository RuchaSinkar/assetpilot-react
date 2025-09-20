import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report' 
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Dashboard/>
      <Report/>
      <Signin />
    </>
  )
}

export default App
