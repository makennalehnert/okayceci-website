import { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Merch from "./components/Merch.jsx"
import Footer from "./components/Footer.jsx"
import Art from "./components/Art.jsx"
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Merch />
      <Art />
      <Footer />
    </>
  )
}

export default App