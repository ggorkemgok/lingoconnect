import { useState } from 'react'
import reactLogo from './assets/LingoConnect-Logo.jpeg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  )
}

export default App