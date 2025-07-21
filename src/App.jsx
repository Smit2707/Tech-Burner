import React from 'react'
import Navbar from './components/Navbar'
// import ThemeToggle from './components/ThemeToggle'
// import Home from './pages/Home'
import MainRoute from './routes/MainRoute'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Auth0Provider
      domain="dev-0qd3c4eivg6fpb0t.us.auth0.com"
    clientId="ulAGgYuDQQk0b4hEjQZEbFIpkLTwgTom"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <div className='px-15 pt-5 pb-0 relative min-h-screen overflow-hidden w-full bg-gradient-to-br from-yellow-400 to-orange-600 text-white'>
        {/* <CustomCursor /> */}
        {/* <ThemeToggle  /> */}
        <Navbar />
        <MainRoute />
        <Footer />
        <ToastContainer theme='dark' autoClose={3000} position='bottom-right' />
      </div>
    </Auth0Provider >
  )
}

export default App