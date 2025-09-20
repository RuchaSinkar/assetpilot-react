import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import {useNavigate} from 'react-router-dom';
function App() {

  return (

    <>
      <Home/>
      <Dashboard/>
    </>
  )
}

export default App
