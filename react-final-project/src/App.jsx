import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HeaderComp from './Components/HeaderComp'

function App() {

  return (
    <>
        <HeaderComp/>
        <Routes>
           <Route>
              {/* <Route path="/" element={<Home />} /> */}
           </Route>
        </Routes>
    </>
  )
}

export default App
