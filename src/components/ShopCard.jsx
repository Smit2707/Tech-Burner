import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

const ShopCard = ({ title, sub, URL, redirect, brand, icon }) => {
    const navigate = useNavigate();
    
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 30px rgba(252, 239, 145, 0.3)",
            }}
            className="w-full md:w-1/2 h-[45vh] sm:h-[60vh] relative overflow-hidden flex items-end p-4 sm:p-6 md:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${URL})` }}
        >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Brand and Icon - Top Right */}
            <div className='absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2'>
                <span className='text-2xl sm:text-3xl text-white/80'>{icon}</span>
                <h3 className='text-2xl sm:text-3xl md:text-4xl text-white/80 font-medium'>
                    {brand.toUpperCase()}
                </h3>
            </div>

            {/* Content - Bottom */}
            <div className='relative z-10 w-full p-4 sm:p-6'>
                <div className='mb-3 sm:mb-4'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-white leading-tight mb-2'>
                        {title.toUpperCase()}
                    </h2>
                    <p className='text-xs sm:text-sm text-white/80 leading-snug'>
                        {sub}
                    </p>
                </div>
                
                <motion.button
                    onClick={() => navigate(redirect)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-white text-black text-xs sm:text-sm md:text-base px-4 py-2 font-medium'
                >
                    EXPLORE
                </motion.button>
            </div>
        </motion.div>
    )
}

export default ShopCard