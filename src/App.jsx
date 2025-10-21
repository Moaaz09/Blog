import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App
