import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-white p-6 sm:p-8 md:p-10 tracking-widest mt-10 sm:mt-16 md:mt-20 border-t border-neutral-600">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div className="flex flex-col items-start gap-4">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                        />
                    </svg>
                    <p className='text-sm sm:text-base md:text-lg tracking-wide leading-relaxed'>
                        Making Tech Fun and Simple, One Video at a Time.
                        <br className="hidden sm:block" />
                        Empowering the next generation with tech insights and creativity since 2014.
                        <br />
                        <span className='text-xs sm:text-sm opacity-70'>© 2025 TechBurner. All rights reserved.</span>
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h6 className="text-white font-light text-base sm:text-lg">Connect With Us</h6>
                    <div className="flex gap-4 sm:gap-6">
                        <a 
                            onClick={() => window.open("https://twitter.com/tech_burner", "_blank")}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="text-xl sm:text-2xl" />
                        </a>
                        <a
                            onClick={() => window.open("https://instagram.com/techburner/?hl=en", "_blank")}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            aria-label="Instagram"
                        >
                            <AiFillInstagram className="text-xl sm:text-2xl" />
                        </a>
                        <a
                            onClick={() => window.open("https://facebook.com/techburner1", "_blank")}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-xl sm:text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Credits */}
                <div className="flex flex-col items-end justify-end text-right">
                    <p className='text-xs sm:text-sm md:text-base'>
                        Built with ❤️ by Tech Enthusiasts.
                        <br />
                        Explore. Learn. Create.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer