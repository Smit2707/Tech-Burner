import React from 'react'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import MainRoute from './routes/MainRoute'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div className='p-5 pb-0 relative min-h-screen overflow-hidden w-full bg-[#FF6A00] text-white'>
      <CustomCursor />
      {/* <ThemeToggle  /> */}
      <Navbar/>
      <MainRoute />
      <Footer />
    </div>
  )
}

export default App