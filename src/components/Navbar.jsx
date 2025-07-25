import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = localStorage.getItem("isLogin");
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    toast.success("Logged Out Successfully");
    localStorage.setItem("isLogin", "false")
    localStorage.removeItem("loginData")
    navigate("/");
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-xl shadow-none"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-full mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 py-2 sm:py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 select-none min-w-0">
          <img className="h-7 w-7 sm:h-8 sm:w-8" src="/flames.gif" alt="logo" />
          <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FCEF91] via-[#E6521F] to-[#FCEF91] bg-clip-text text-transparent tracking-tight animate-gradient-x truncate">Tech Burner</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 sm:gap-8 items-center">
          {navItems.map(item => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`relative text-base sm:text-lg font-semibold px-2 py-1 transition-colors duration-200 focus:outline-none tracking-widest cursor-pointer ${location.pathname === item.path ? "text-[#FCEF91]" : "text-black/60 hover:text-[#FCEF91]"}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {/* Animated underline */}
              <span className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full transition-all duration-300 ${location.pathname === item.path ? 'bg-gradient-to-r from-[#FCEF91] via-[#E6521F] to-[#FCEF91] opacity-100' : 'opacity-0 group-hover:opacity-100 bg-[#FCEF91]'}`}></span>
            </motion.button>
          ))}
        </div>
        {/* Auth Button (desktop only) */}
        <div className="hidden md:flex items-center">
          {isLogin === "true" ? (
            <motion.button
              onClick={handleLogout}
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#E6521F] to-[#FCEF91] text-black font-bold shadow-md hover:scale-105 transition-transform duration-200 tracking-wider text-lg"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              Logout
            </motion.button>
          ) : (
            <Link
              to="/signup"
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FCEF91] to-[#FFD580] text-[#E6521F] font-bold shadow-md hover:scale-105 transition-transform duration-200 border border-[#E6521F]/30 tracking-wider text-lg"
            >
              Sign Up
            </Link>
          )}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-1 bg-[#FCEF91] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#FCEF91] rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#FCEF91] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#18181b]/95 flex flex-col items-center justify-center gap-10 z-40 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-4xl text-[#FCEF91] hover:text-[#E6521F] transition-colors duration-200 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => { setMenuOpen(false); navigate(item.path); }}
                className={`w-full text-2xl sm:text-3xl font-bold tracking-wider py-4 rounded-lg ${location.pathname === item.path ? "text-[#FCEF91] underline" : "text-white/80 hover:text-[#FCEF91]"}`}
              >
                {item.label}
              </button>
            ))}
            {isLogin === "true" ? (
              <button
                onClick={() => { setMenuOpen(false); handleLogout(); }}
                className="mt-4 w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#E6521F] to-[#FCEF91] text-black font-bold text-2xl shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="mt-4 w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#FCEF91] to-[#FFD580] text-[#E6521F] font-bold text-2xl shadow-md border border-[#E6521F]/30 text-center"
              >
                Sign Up
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </motion.header>
  )
}

export default Navbar