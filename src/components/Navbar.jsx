import React from 'react'
import { motion } from "motion/react"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            className=''
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
                    animate={{

                    }}
                    initial={{

                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                    }}
                    className='flex items-center gap-2 h-full cursor-pointer'>
                    <img
                        className='h-7'
                        // src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjV0em9zcnZ5NXo4bGR1NTloNjVhZGJpODl1ZXZqb2Z4M3V1cWE0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dndiy37yzJjpcn4DfF/giphy.gif"
                        src="/flames.gif"
                        alt="" />

                    <Link to="/" className='text-3xl'>Tech Burner</Link>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    className='flex gap-5'>
                    <motion.h5 onClick={() => navigate("/shop")} animate={{}} initial={{ y: 0 }} whileHover={{ y: 5 }} whileTap={{ scale: 0.8 }} className='text-xl cursor-pointer tracking-wider'>Shop</motion.h5>
                    <motion.h5 onClick={() => navigate("/shop")} animate={{}} initial={{ y: 0 }} whileHover={{ y: 5 }} whileTap={{ scale: 0.8 }} className='text-xl cursor-pointer tracking-wider'>About</motion.h5>
                    <motion.h5 onClick={() => navigate("/shop")} animate={{}} initial={{ y: 0 }} whileHover={{ y: 5 }} whileTap={{ scale: 0.8 }} className='text-xl cursor-pointer tracking-wider'>Contact</motion.h5>
                    <motion.h5 onClick={() => navigate("/shop")} animate={{}} initial={{ y: 0 }} whileHover={{ y: 5 }} whileTap={{ scale: 0.8 }} className='text-xl cursor-pointer tracking-wider'>Team</motion.h5>
                </motion.div>
                <button
                    className='btn btn-outline text-xl tracking-widest'> Login </button>
            </nav>
        </motion.div>
    )
}

export default Navbar