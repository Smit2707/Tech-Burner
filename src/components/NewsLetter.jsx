import React from 'react';
import { motion } from "motion/react"

const NewsLetter = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity:1 }}
        transition={{ duration:1, ease: "aniticipate" }}
        className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-transparent border w-full mx-auto my-8 tracking-widest">
            {/* Left Section */}
            <div className="flex-1 p-10 flex flex-col justify-center">
                <span className="text-[#FCEF91] text-xs font-extralight mb-4">Subscribe to our weekly drop and get the latest YouTube videos, unfiltered takes on new tech launches, and insider scoops – before anyone else.</span>
                <h2 className="text-gray-800 text-lg md:text-lg  font-bold leading-tight mb-6">
                    ✅ Be the first to know when a new video drops <br />
                    🚀 Get deep dives on product launches – phones, gadgets, apps & more <br />
                    🎯 Exclusive behind-the-scenes & community-only updates
                </h2>
                <p className="text-gray-800 mb-8 opacity-60">
                    Join 50,000+ TechBurner insiders who never miss a beat.
                </p>
                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Send Me the Updates!"
                        className="bg-transparent border border-gray-600 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-[#FCEF91] transition-all"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#FCEF91] text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#fff188] transition-all w-fit"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            {/* Right Section */}
            <div className="flex-1 min-h-[320px] max-h-[500px]">
                <img
                    src="/tech.jpg"
                    alt="Newsletter Visual"
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
    );
};

export default NewsLetter;