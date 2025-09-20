import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import Signin from './pages/Signin' 
import {useNavigate} from 'react-router-dom';
import Borrow from './components/Borrow'
function App() {

  return (
    <>
      <Home/>
      <Borrow />
      <Dashboard/>
      <Report/>
      <Signin/>
    </>
  )
}

export default App
