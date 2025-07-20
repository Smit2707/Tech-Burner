import React, { useRef } from 'react'
import { motion } from "motion/react"
import { Link, Links } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import VideoCard from '../components/VideoCard';
import NewsLetter from '../components/NewsLetter';
import ScrollVelocity from '../components/ScrollVelocity';
import ModelViewer from '../components/ModalViewer';
import CircularGallery from '../components/CircularGallery';

const Home = () => {
    const constraintRef = useRef(null);
    return (
        <motion.div
            className='w-full h-full mt-10'>
            {/* hero */}
            <section className='w-full  h-[70vh] flex justify-around rounded-xl overflow-hidden'>

                <motion.div
                    initial={{
                        x: -700,
                        opacity: 0,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{
                        // ease: "easeInOut",
                        duration: 0.3
                    }}
                    whileHover={{
                        scale: 0.89
                    }}
                    className='h-full w-[50%] p-10 cursor-pointer relative'>
                    <h3 className='absolute text-[6vw] text-black opacity-25 rotate-45 right-1 top-20 '>OVERLAYS</h3>
                    <h3 className='absolute text-[6vw] text-black opacity-25 rotate-45 right-1 top-20 '>OVERLAYS</h3>
                    <h3 className='absolute text-[6vw] text-black opacity-25 rotate-45 left-1 bottom-20 '>OVERLAYS</h3>
                    <h3 className='absolute text-[6vw] text-black opacity-25 rotate-45 left-1 bottom-20 '>OVERLAYS</h3>
                    <img className='h-full w-full rounded-xl object-cover object-[50%_10%]' src="/tech2.jpg" alt="" />
                </motion.div>
                <motion.div
                    ref={constraintRef}

                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.5
                    }} className='w-[40%]  bg-transparent h-full flex flex-col items-start justify-center'>
                    <div>
                        <motion.h2
                            initial={{
                                rotate: 0,
                                x: 1000,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            whileHover={{
                                rotate: 25,
                                scale: 0.68
                            }}
                            transition={{
                                duration: 1,
                                ease: 'anticipate'
                            }}
                            className='text-[7.5vw] font-bold text-[#FCEF91] tracking-wide leading-28 cursor-pointer'>
                            Hi I'm <span className='text-[#E6521F]'>Tech</span> Burner
                        </motion.h2>
                        <motion.h4
                            initial={{
                                rotate: 0,
                                x: 3000,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            whileHover={{
                                rotate: -25,
                                scale: 0.68
                            }}
                            transition={{
                                duration: 1,
                                ease: 'anticipate'
                            }}
                            className='text-[4vw] w-full text-end text-[#E6521F] cursor-pointer'>
                            I make tech Fun
                        </motion.h4>
                    </div>
                    <motion.button
                        initial={{
                            rotate: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "anticipate"
                        }}
                        drag
                        whileDrag={{
                            scale: "0.85"
                        }}
                        dragConstraints={constraintRef}
                        whileHover={{
                            scale: 1.10,
                            boxShadow: "1px 1px 100px #FCEF91"
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                        onClick={() => window.open("https://www.youtube.com/@TechBurner/videos", "_blank")}
                        className='text-2xl bg-[#EA2F14] px-4 py-2 rounded-lg tracking-wider cursor-pointer outline-none' >
                        🔥 Watch My Videos
                    </motion.button>
                </motion.div>
            </section>
            {/* <div className='flex justify-between'>
                <div className='text-6xl'>tech burner</div>
                <ModelViewer
                    url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                    width="60%"
                    height={400}
                />
            </div> */}

            <ScrollVelocity
                texts={['Tech Burner', 'Scroll Down']}
                velocity={100}
                className="custom-scroll-text tracking-wider text-[#FCEF91]"
            />

            {/* popular videos */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className='my-10'
            >
                <div className='w-full flex justify-between items-center my-10'>
                    <h3 className='text-5xl font-bold tracking-wide text-white drop-shadow-lg'>Popular Videos</h3>
                    <motion.button
                        whileHover={{
                            scale: 1.10,
                            boxShadow: "1px 1px 100px #FCEF91"
                        }}
                        onClick={() => window.open("https://www.youtube.com/@TechBurner/featured", "_blank")}
                        className='text-xl tracking-wider bg-[#EA2F14] outline-none px-4 py-2 rounded-lg flex gap-2 items-center shadow-lg cursor-pointer'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube />
                        Visit Channel
                    </motion.button>
                </div>
                <motion.div
                    className='flex justify-between gap-6'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.28 }
                        }
                    }}
                >
                    {[ // Array for mapping
                        "https://www.youtube-nocookie.com/embed/4XsfwD1ZwlU?si=MDLTGfXewjEkSzDz",
                        "https://www.youtube-nocookie.com/embed/VQeySLmSMhc?si=5WhmjIvYayEG5igB",
                        "https://www.youtube-nocookie.com/embed/fOwU3Iav72c?si=cDYYg_EMMeQo7Rip"
                    ].map((src, idx) => (
                        <motion.div
                            key={src}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ type: "spring", stiffness: 80, damping: 18 }}
                            whileHover={{
                                scale: 1.04,
                                boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                            }}
                            className="rounded-xl overflow-hidden bg-white shadow-md "
                            style={{ flex: 1 }}
                        >
                            <VideoCard src={src} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            <div className='mb-44 mt-14' style={{ height: '600px', position: 'relative' }}>
                <h2 className='text-5xl font-semibold tracking-widest '>Gallery of Greats</h2>
                <CircularGallery bend={-2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={0.3} />
            </div>

            <NewsLetter />
        </motion.div>
    )
}

export default Home