import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PokeList from './Routes/PokeList'
import Pokemon from './Routes/Pokemon'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<PokeList/>}/>
        <Route path='/poke/:name' element={<Pokemon/>}/>
      </Routes>
    </>
  )
}

export default App
