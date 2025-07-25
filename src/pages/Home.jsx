import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import VideoCard from '../components/VideoCard';
import NewsLetter from '../components/NewsLetter';
import ScrollVelocity from '../components/ScrollVelocity';
import CircularGallery from '../components/CircularGallery';

const Home = () => {
    const constraintRef = useRef(null);

    const images = [
        "/tech3.jpg",
        "anarth.png",
        "https://overlaysnow.com/cdn/shop/files/Banner-web-_9.jpg?v=1729698432&width=2000",
        "https://www.layers.shop/cdn/shop/files/founders_2.webp?v=1725254683",
        "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM_2.jpg?v=1752923465&width=2000",
    ];

    const slides = [
        {
            title: "Community-Driven Culture",
            subtitle: "More than just a brand, we're a movement—connecting creatives, skaters, and trendsetters who define the streets.",
            label: "Community",
            route: "/overlays"
        },
        {
            title: "Limited Drops, Maximum Impact",
            subtitle: "Exclusive drops for those who want to make a statement without compromise.",
            label: "Drops",
            route: "/layers"
        },
        {
            title: "Built for the Streets",
            subtitle: "Durable, comfortable, and made to stand up to any challenge.",
            label: "Streetwear",
            route: "/overlays"
        },
        {
            title: "Art Meets Attitude",
            subtitle: "Where artistic expression finds its streetwise edge.",
            label: "Art",
            route: "/layers"
        },
        {
            title: "Future-Ready Fashion",
            subtitle: "Pioneering materials and cuts for the next generation.",
            label: "Future",
            route: "/overlays"
        },
    ];

    const SLIDE_DURATION = 5000;
    const FADE_DURATION = 800;
    const [current, setCurrent] = useState(0);
    const [fadeState, setFadeState] = useState('fade-in');
    const timerRef = useRef(null);
    const animationTimerRef = useRef(null);

    useEffect(() => {
        animationTimerRef.current = setTimeout(() => {
            setFadeState('fade-out');
        }, SLIDE_DURATION - FADE_DURATION);

        return () => clearTimeout(animationTimerRef.current);
    }, [current]);

    useEffect(() => {
        if (fadeState === 'fade-out') {
            timerRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length);
                setFadeState('fade-in');
            }, FADE_DURATION);
        }
        return () => clearTimeout(timerRef.current);
    }, [fadeState]);

    const goTo = (idx) => {
        setFadeState('fade-out');
        setTimeout(() => {
            setCurrent(idx);
            setFadeState('fade-in');
        }, FADE_DURATION);
    };

    return (
        <motion.div className='w-full h-full mt-4 md:mt-10'>
            {/* Hero Slider */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "anticipate" }}
                className="relative min-h-[50vh] md:min-h-[80vh] bg-black my-4 md:my-10 flex items-center justify-center tracking-widest overflow-hidden rounded-br-[2rem] rounded-tl-[2rem] md:rounded-br-[8rem] md:rounded-tl-[8rem]"
            >
                {/* Animated background image */}
                <div
                    className={`absolute inset-0 bg-[50%_15%] bg-cover transition-transform transition-opacity duration-700 ease-out ${
                        fadeState === 'fade-in' ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                    style={{ backgroundImage: `url('${images[current]}')` }}
                    key={current}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Animated content */}
                <div
                    className={`relative z-20 flex flex-col gap-2 md:gap-5 justify-center px-6 md:px-20 items-start w-full py-12 md:py-24 transition-opacity duration-700 ease-in-out ${
                        fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mb-2 md:mb-4">
                        {slides[current].title}
                    </h1>
                    <p className="text-gray-200 text-sm md:text-base lg:text-lg">
                        {slides[current].subtitle}
                    </p>
                    <Link 
                        to={slides[current].route} 
                        className="mt-4 md:mt-8 px-4 py-2 md:px-8 md:py-3 rounded-full bg-white text-black text-sm md:text-base font-medium shadow-lg transition hover:bg-transparent hover:text-white hover:border focus:outline-none"
                    >
                        Shop now →
                    </Link>
                </div>

                {/* Bottom navigation - Hidden on mobile, shown on tablet+ */}
                <div className="hidden sm:flex absolute bottom-6 left-0 right-0 w-full justify-between px-6 md:px-20 z-30">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-1 items-center group cursor-pointer select-none"
                            onClick={() => goTo(idx)}
                        >
                            <span
                                className={`text-sm md:text-lg font-semibold transition-all duration-300 ${
                                    current === idx
                                        ? "text-white drop-shadow-lg"
                                        : "text-gray-400 group-hover:text-gray-200"
                                }`}
                            >
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span
                                className={`transition-all duration-300 text-xs ${
                                    current === idx
                                        ? "text-white"
                                        : "text-gray-400 group-hover:text-gray-200"
                                }`}
                            >
                                {slide.label}
                            </span>
                            {current === idx && <span className="block w-6 md:w-10 h-1 bg-white rounded-full mt-1" />}
                        </div>
                    ))}
                </div>

                {/* Mobile dots navigation */}
                <div className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                current === idx ? 'bg-white scale-110' : 'bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Scrolling text */}
            {/* <div className='w-screen mt-8 md:mt-15 px-0 overflow-hidden'>
                <ScrollVelocity
                    texts={['Tech Burner', 'Scroll Down']}
                    velocity={30}
                    className="custom-scroll-text tracking-wider text-[#FCEF91] text-xl md:text-2xl"
                />
            </div> */}

            {/* Popular videos */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className='mt-8 md:mt-15 px-4 md:px-0'
            >
                <div className='w-full flex flex-col sm:flex-row justify-between items-center my-6 md:my-10 gap-4'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white drop-shadow-lg text-center sm:text-left'>
                        Popular Videos
                    </h3>
                    <motion.button
                        whileHover={{
                            scale: 1.10,
                            boxShadow: "1px 1px 100px #FCEF91"
                        }}
                        onClick={() => window.open("https://www.youtube.com/@TechBurner/featured", "_blank")}
                        className='text-base md:text-xl tracking-wider bg-[#EA2F14] outline-none px-4 py-2 rounded-lg flex gap-2 items-center shadow-lg cursor-pointer'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube />
                        Visit Channel
                    </motion.button>
                </div>
                <motion.div
                    className='flex flex-col md:flex-row justify-between gap-4 md:gap-6'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.28 }
                        }
                    }}
                >
                    {[
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
                            className="rounded-xl overflow-hidden bg-white shadow-md w-full md:w-1/3"
                        >
                            <VideoCard src={src} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Circular Gallery */}
            <div className='mb-8 md:mb-15 mt-8 md:mt-15 px-4 md:px-0' style={{ height: '400px', position: 'relative' }}>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-widest text-center md:text-left mb-4'>
                    Gallery of Greats
                </h2>
                <CircularGallery 
                    bend={-2} 
                    textColor="#ffffff" 
                    borderRadius={0.05} 
                    scrollEase={0.03} 
                    scrollSpeed={0.3} 
                />
            </div>

            {/* Newsletter */}
            <div className='px-4 md:px-0'>
                <NewsLetter />
            </div>
        </motion.div>
    )
}

export default Home