import React from 'react'
import './App.css'
import Login from './Pages/Login'
import {Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
