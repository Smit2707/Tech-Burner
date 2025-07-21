import React from 'react'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'

const ShopCard = ({ title, sub, URL, redirect, brand, icon }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                boxShadow: "1px 1px 100px #FCEF91",
            }}
            // transition={{
            //     duration: 0.2,
            //     ease:"anticipate"
            // }}
            className="w-1/2 h-[50vh] relative rounded-none tracking-widest flex items-end p-10 bg-cover bg-[50%_30%]"
            style={{ backgroundImage: `url(${URL})` }}
        >
            <div className='absolute flex items-center gap-2 top-5 right-5'>
                <h3 className='text-5xl text-white/70'>{icon}</h3>
                <h3 className='text-6xl text-white/70'>{brand}</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-extralight w-[70%]'>{title}</h2>
                    <h4 className='text-sm opacity-50 font-[100] w-[80%]'>{sub}</h4>
                </div>
                <motion.button
                    onClick={() => navigate(redirect)}
                    initial={{
                        boxShadow: "none"
                    }}
                    whileHover={{
                        scale: 1.15,
                        boxShadow: "10px 10px 100px black"
                    }}
                    className='bg-white cursor-pointer w-fit text-sm text-black px-4 py-2'>
                    explore
                </motion.button>
            </div>
        </motion.div>
    )
}

export default ShopCard
