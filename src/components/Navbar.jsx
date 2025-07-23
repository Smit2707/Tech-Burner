import React from 'react'
import { motion } from "motion/react"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = localStorage.getItem("isLogin");
    console.log(isLogin)
    const navItems = [
        { label: "Shop", path: "/shop" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Team", path: "/team" },
    ];

    // const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    // console.log(user)
    const handleLogout = () => {
        toast.success("Logged Out Successfully");
        localStorage.setItem("isLogin", "false")
        localStorage.removeItem("loginData")
    }
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
                delay: 0.5
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
                            className={`text-xl cursor-pointer tracking-widest ${location.pathname === item.path
                                ? "font-bold text-[#FCEF91] underline"
                                : ""
                                }`}
                        >
                            {item.label}
                        </motion.div>
                    ))}
                </motion.div>
                {isLogin == "true" ?
                    <button
                        onClick={handleLogout}
                        className='bg-red-600 text-white px-3 py-1 text-center rounded-sm text-lg cursor-pointer  tracking-wider hover:scale-[1.05] duration-300 ease active:scale-[0.95]'>
                        Logout
                    </button>
                    :
                    <Link
                        to="/signup"
                        className='bg-[#FCEF91] text-[#EA2F14] px-3 py-1 text-center rounded-sm text-lg cursor-pointer font-bold tracking-widest hover:scale-[1.05] duration-300 ease active:scale-[0.95]'>
                        Sign Up
                    </Link>
                }
                {/* <div>
                    {isAuthenticated ?
                        <>
                            <button
                            className='btn btn-soft text-lg font-extralight tracking-wider btn-warning'
                                onClick={(e) => logout()}>
                                Log Out
                            </button>
                        </>
                        :
                        <>
                            <button
                            className='btn btn-soft text-lg font-extralight tracking-wider btn-accent'
                                onClick={() => loginWithRedirect()}>
                                Login
                            </button>
                        </>
                    }
                </div> */}
            </nav>
        </motion.div>
    )
}

export default Navbar