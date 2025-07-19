import React from 'react'
import { motion } from "motion/react"
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: "Shop", path: "/shop" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Team", path: "/team" },
    ];

    return (
        <motion.div
            className='text-[#E6521F]'
            initial={{
                y: -100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay:0.5
            }}
        >
            <nav className='flex justify-between items-center'>
                <motion.div
                    className='flex items-center gap-2 h-full cursor-pointer'>
                    <img
                        className='h-7'
                        src="/flames.gif"
                        alt="" />
                    <Link to="/" className='text-3xl'>Tech Burner</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='flex gap-5'>
                    {navItems.map(item => (
                        <motion.div
                            key={item.path}
                            initial={{ y: 0 }}
                            whileHover={{ y: 5 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => navigate(item.path)}
                            className={`text-xl cursor-pointer tracking-widest ${
                                location.pathname === item.path
                                    ? "font-bold text-[#FCEF91] underline"
                                    : ""
                            }`}
                        >
                            {item.label}
                        </motion.div>
                    ))}
                </motion.div>
                
                <button
                    className='btn btn-outline text-xl tracking-widest'> Login </button>
            </nav>
        </motion.div>
    )
}

export default Navbar