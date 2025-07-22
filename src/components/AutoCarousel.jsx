import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"

const images = [
  "https://overlaysnow.com/cdn/shop/files/Change_the_Rules._Fly_Beyond_Limits_Desktop_Banner_WEBP_V2.webp?v=1752923797&width=2000",
  "https://overlaysnow.com/cdn/shop/files/Group_1_e8823afb-7cf1-4791-8f0b-4f37ab038fcf.png?v=1752477400&width=2000",
  "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM.jpg?v=1752923464&width=2000",
  "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM_2.jpg?v=1752923465&width=2000",
  "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM_2.jpg?v=1752923465&width=2000",
];

const slides = [
  {
    title: "Community-Driven Culture",
    subtitle:
      "More than just a brand, we’re a movement—connecting creatives, skaters, and trendsetters who define the streets.",
    label: "Community-Driven Culture",
  },
  {
    title: "Limited Drops, Maximum Impact",
    subtitle: "Exclusive drops for those who want to make a statement without compromise.",
    label: "Limited Drops, Maximum Impact",
  },
  {
    title: "Built for the Streets",
    subtitle: "Durable, comfortable, and made to stand up to any challenge.",
    label: "Built for the Streets",
  },
  {
    title: "Art Meets Attitude",
    subtitle: "Where artistic expression finds its streetwise edge.",
    label: "Art Meets Attitude",
  },
  {
    title: "Future-Ready Fashion",
    subtitle: "Pioneering materials and cuts for the next generation.",
    label: "Future-Ready Fashion",
  },
];

const SLIDE_DURATION = 4000;
const FADE_DURATION = 800; // in ms

export default function CommunitySlider() {
  const [current, setCurrent] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const timerRef = useRef(null);
  const animationTimerRef = useRef(null);

  useEffect(() => {
    // Start fade-out a bit before slide switches
    animationTimerRef.current = setTimeout(() => {
      setFadeState('fade-out');
    }, SLIDE_DURATION - FADE_DURATION);

    return () => clearTimeout(animationTimerRef.current);
  }, [current]);

  useEffect(() => {
    if (fadeState === 'fade-out') {
      // After fade-out, switch slide and fade-in
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
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
        filter: "blur(10px)"
      }}
      animate={{
        scale: 1,
        opacity: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "anticipate"
      }}
      className="relative min-h-[80vh] bg-black mt-10 flex items-center justify-center tracking-widest overflow-hidden rounded-[2rem]">
      {/* Animated background image */}
      <div
        className={`absolute inset-0 bg-[50%_15%] bg-cover transition-transform transition-opacity duration-700 ease-out ${fadeState === 'fade-in' ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        style={{ backgroundImage: `url('${images[current]}')` }}
        key={current}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Animated content */}
      <div
        className={`relative z-20 flex flex-col gap-5 justify-center px-20 items-start w-full py-24 transition-opacity duration-700 ease-in-out ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold uppercase tracking-wider mb-4">
          {slides[current].title}
        </h1>
        <p className="text-gray-200 text-lg">
          {slides[current].subtitle}
        </p>
        <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-medium shadow-lg hover:bg-gray-100 transition focus:outline-none">
          Shop now →
        </button>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex w-full justify-between px-20 z-30">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-1 items-center group cursor-pointer select-none"
            onClick={() => goTo(idx)}
          >
            <span
              className={`text-lg font-semibold transition-all duration-300 ${current === idx
                  ? "text-white drop-shadow-lg"
                  : "text-gray-400 group-hover:text-gray-200"
                }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span
              className={`transition-all duration-300 text-xs ${current === idx
                  ? "text-white"
                  : "text-gray-400 group-hover:text-gray-200"
                }`}
            >
              {slide.label}
            </span>
            {current === idx && <span className="block w-10 h-1 bg-white rounded-full mt-1" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
