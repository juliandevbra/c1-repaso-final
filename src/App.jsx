import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PokeList from './Routes/PokeList'
import Pokemon from './Routes/Pokemon'
import Navbar from './Components/Navbar'
import UseMemo from './Clase 24/UseMemo'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Contact from './Routes/Contact'
import About from './Routes/About'
import ErrorBoundary from './Clase 24/ErrorBoundary'
import BasicTimeClock from './Components/Clock'

function App() {

  return (
    <>
      <ToastContainer/>
      {/* <UseMemo/> */}
      <BasicTimeClock/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ErrorBoundary><PokeList/></ErrorBoundary>}/>
        <Route path='/poke/:name' element={<ErrorBoundary><Pokemon/></ErrorBoundary>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
