import React, { useState } from 'react'
import AutoCarousel from '../components/AutoCarousel'
import CommunitySlider from '../components/AutoCarousel'
import { motion } from "motion/react"
import MagicBento from '../components/MagicBento'

const Overlays = () => {

    const products = [
        {
            name: "The Tanned Shaket (Oversized)",
            image: "https://overlaysnow.com/cdn/shop/files/The_Tanned_Shaket_Oversized__01.jpg?v=1730599861&width=800", // Replace with your image path
            description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
            price: "₹ 1,890",
            oldPrice: "₹ 2,000",
            tag: "NEW",
        },
        {
            name: "Maroon Textured Corduroy Shaket",
            image: "https://overlaysnow.com/cdn/shop/files/Maroon_Resized.jpg?v=1734681415&width=800", // Replace with your image path
            description: "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
            price: "₹ 1,424.00",
            oldPrice: "₹ 3200",
            tag: "NEW",
        },
        {
            name: "Fearless Navy Sweatshirt",
            image: "https://overlaysnow.com/cdn/shop/files/Fearless_Navy_Sweatshirt_06_3709e3ba-ead6-4b91-8279-4d04c23537a8.jpg?v=1733221908&width=800", // Replace with your image path
            description: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
            price: "₹ 899.00",
            oldPrice: "₹ 1,699.00",
            tag: "NEW",
        },
    ];
    const [selected, setSelected] = useState(0);
    const heroImages = [
        {
            src: "https://overlaysnow.com/cdn/shop/files/1L9A0988.jpg?v=1733834407&width=800", // Main hero image 1
            thumbnail: "https://overlaysnow.com/cdn/shop/files/1L9A0988.jpg?v=1733834407&width=800",
            alt: "Main hoodie front"
        },
        {
            src: "https://overlaysnow.com/cdn/shop/files/Raven_Oversized_Hoodies_01_82103749-75a7-40ed-bf14-458cda9a27b1.jpg?v=1733229470&width=800",
            thumbnail: "https://overlaysnow.com/cdn/shop/files/Raven_Oversized_Hoodies_01_82103749-75a7-40ed-bf14-458cda9a27b1.jpg?v=1733229470&width=800",
            alt: "Side profile"
        },
        {
            src: "https://overlaysnow.com/cdn/shop/files/Acid_Embossed_Hoodie_01_902fe134-8cdb-4a41-a9de-a45a0301b335.jpg?v=1733228862&width=800",
            thumbnail: "https://overlaysnow.com/cdn/shop/files/Acid_Embossed_Hoodie_01_902fe134-8cdb-4a41-a9de-a45a0301b335.jpg?v=1733228862&width=800",
            alt: "Back hoodie"
        },
        {
            src: "https://overlaysnow.com/cdn/shop/files/CoCoa_Brown_Oversized_Hoodies_01.jpg?v=1733229045&width=800",
            thumbnail: "https://overlaysnow.com/cdn/shop/files/CoCoa_Brown_Oversized_Hoodies_01.jpg?v=1733229045&width=800",
            alt: "Hoodie with shirt"
        }
    ];

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form logic here
    };
    return (
        <div className=' w-full'>
            <CommunitySlider />

            <motion.section
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}

                className="bg-transparent py-16">
                <div className="max-w-full mx-auto px-4 tracking-wider">
                    {/* Section Title */}
                    <h2 className="text-5xl font-extrabold text-[#FCEF91] tracking-wider mb-3 uppercase">New Drops</h2>
                    {/* Section Subtitle */}
                    <p className="mb-10 text-xl text-[#E6521F] max-w-full">
                        Stand out with our latest collection—bold designs, premium fabrics, and street-ready fits. Once they’re gone, they’re gone. Don’t miss out!
                    </p>

                    {/* Product Cards Grid */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                        {products.map((p, idx) => (
                            <motion.div
                                whileHover={{
                                    scale: 1.025,
                                    borderRadius: 10
                                }}
                                key={idx} className="bg-[#ffffff] shadow-md overflow-hidden flex flex-col group transition hover:shadow-lg">
                                {/* Product Image */}
                                <div className="relative">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="object-cover w-full h-96"
                                    />
                                    <span className="absolute top-3 left-3 bg-black text-white text-sm font-bold px-3 py-1 rounded-full z-10 tracking-widest">
                                        {p.tag}
                                    </span>
                                </div>
                                {/* Product Info */}
                                <div className="flex-1 flex flex-col p-6">
                                    <h3 className="text-4xl font-semibold text-[#FB9E3A] mb-2 uppercase">{p.name}</h3>
                                    <p className="text-gray-500 opacity-60 text-sm mb-5">{p.description}</p>
                                    <div className="mt-auto flex items-end gap-3">
                                        <span className="text-lg text-[#EA2F14] font-bold">{p.price}</span>
                                        <span className="text-[#E6521F] line-through text-2xl mb-0.5">{p.oldPrice}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Trending section */}
            <motion.section
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}>
                <h2 className='text-5xl text-[#FCEF91] tracking-widest font-semibold mb-3'>Trending Categories</h2>
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </motion.section>

            {/* hoodies section */}
            <motion.section
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full min-h-screen flex justify-evenly bg-transparent relative py-10 overflow-x-hidden">
                {/* Text Content */}
                <div className="flex flex-col justify-center pr-6 py-16 text-left text-[#FCEF91] max-w-full z-10">
                    <h1 className="text-[2.7rem] sm:text-8xl font-extrabold uppercase leading-24 mb-3 tracking-wider">
                        NIGHTFALL<br /> OVERSIZED<br /> HOODIE
                    </h1>
                    <p className="text-[#fff] mt-4 text-2xl opacity-90 mb-9 max-w-xl">
                        A heavyweight, ultra-soft hoodie designed for comfort and style. Featuring a relaxed fit, subtle embroidered detailing, and a faded wash for that perfect worn-in look. Street-ready and built to stand out.
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                        <span className="text-2xl tracking-wider font-bold">$89</span>
                        <span className="opacity-80 line-through text-lg">$130</span>
                    </div>
                    <button className="mt-2 w-fit inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 hover:scale-[1.025] tracking-wider transition duration-200 ease">
                        Shop now <span className="text-xl">&rarr;</span>
                    </button>
                </div>

                {/* Main Image Area */}
                <div className="flex flex-col items-center justify-center relative py-16">
                    <div className="w-[480px] h-[530px] bg-white rounded-3xl overflow-hidden shadow-xl flex items-center justify-center relative transition-all duration-500">
                        <img
                            key={heroImages[selected].src}
                            src={heroImages[selected].src}
                            alt={heroImages[selected].alt}
                            className="object-cover object-top w-full h-full transition-all duration-500"
                            style={{ aspectRatio: "4/5" }}
                        />
                    </div>
                    {/* Thumbnail Images */}
                    <div className="flex w-full justify-between mt-8">
                        {heroImages.map((img, i) => (
                            <button
                                key={img.thumbnail}
                                className={`rounded-xl overflow-hidden border-2 transition
                ${selected === i ? "border-zinc-900 ring-2 ring-offset-2 ring-white" : "border-transparent opacity-70"}
                hover:opacity-100`}
                                onClick={() => setSelected(i)}
                                tabIndex={0}
                                aria-label={`Show view ${i + 1}`}
                            >
                                <img
                                    src={img.thumbnail}
                                    alt={img.alt}
                                    className="w-20 h-24 object-cover"
                                    style={{ aspectRatio: "4/5" }}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </motion.section>


            {/* why shop with us */}
            <motion.section
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full bg-transparent py-16">
                <div className="max-w-7xl mx-auto px-6 text-[#FCEF91] flex flex-col md:flex-row md:justify-between md:items-center gap-0 tracking-wider">
                    {/* Main Left Content */}
                    <div className="md:w-2/5 mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-wider leading-18 mb-2">
                            why shop with us?
                        </h2>
                        <p className="text-black/55 text-xl leading-snug md:max-w-sm mt-3">
                            We’ve got you covered with hassle-free shopping, top-tier service, and guarantees that keep you confident in every purchase.
                        </p>
                    </div>
                    {/* Four Feature Cards */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-12 lg:w-3/5">
                        {/* FREE DELIVERY */}
                        <div className="flex flex-col items-start">
                            {/* Icon */}
                            <div className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-gray-100">
                                <svg width="29" height="29" fill="none" viewBox="0 0 29 29">
                                    <rect x="6" y="14" width="13" height="9" rx="2" fill="#222" />
                                    <rect x="19" y="17" width="4" height="6" rx="1" fill="#222" />
                                    <path d="M7 14l-1.8-2.4A2 2 0 0 1 8.08 8H16v2H8.08a1 1 0 0 0-.8 1.6L11 14h-4z" fill="#222" />
                                </svg>
                            </div>
                            <h4 className="uppercase font-light text-2xl tracking-wider mb-1">Free Delivery</h4>
                            <p className="text-black/55 text-base leading-snug">
                                Get your streetwear fast and free, with no extra shipping costs on all orders.
                            </p>
                        </div>
                        {/* 100% SECURE PAYMENT */}
                        <div className="flex flex-col items-start">
                            <div className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-gray-100">
                                <svg width="29" height="29" fill="none" viewBox="0 0 29 29">
                                    <rect x="6" y="11" width="17" height="12" rx="2" fill="#222" />
                                    <rect x="12" y="17" width="5" height="4" rx="1" fill="#fff" />
                                    <circle cx="15" cy="16" r="1.5" fill="#fff" />
                                </svg>
                            </div>
                            <h4 className="uppercase font-light text-2xl tracking-wider mb-1">100% Secure Payment</h4>
                            <p className="text-black/55 text-base leading-snug">
                                Shop with confidence using encrypted, safe, and trusted payment methods.
                            </p>
                        </div>
                        {/* 30 DAYS RETURN */}
                        <div className="flex flex-col items-start">
                            <div className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-gray-100">
                                <svg width="29" height="29" fill="none" viewBox="0 0 29 29">
                                    <rect x="6" y="12" width="17" height="10" rx="2" fill="#222" />
                                    <path d="M12.5 15h4v4h-4z" fill="#fff" />
                                    <path d="M16 15l2-2 2 2" stroke="#fff" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <h4 className="uppercase font-light text-2xl tracking-wider mb-1">30 Days Return</h4>
                            <p className="text-black/55 text-base leading-snug">
                                Not the perfect fit? No worries. Return or exchange hassle-free within 30 days.
                            </p>
                        </div>
                        {/* 24/7 SUPPORT */}
                        <div className="flex flex-col items-start">
                            <div className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-gray-100">
                                <svg width="29" height="29" fill="none" viewBox="0 0 29 29">
                                    <circle cx="14.5" cy="14.5" r="10" stroke="#222" strokeWidth="2" />
                                    <rect x="13" y="10" width="3" height="7" rx="1.5" fill="#222" />
                                    <rect x="13" y="18" width="3" height="3" rx="1.5" fill="#222" />
                                </svg>
                            </div>
                            <h4 className="uppercase font-light text-2xl tracking-wider mb-1">24/7 Support</h4>
                            <p className="text-black/55 text-base leading-snug">
                                Got questions? Our team is here for you anytime, anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Newsletter */}
            <motion.section
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full bg-transparent py-16 text-[#FCEF91] tracking-wider">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
                    {/* LEFT: Headings & Subtext */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-6xl font-extrabold uppercase leading-sung tracking-wider mb-3">
                            Subscribe to our<br />newsletter now!
                        </h2>
                        <p className="text-black/55 mt-3 max-w-md">
                            Get top Framer components, exclusive freebies, and expert tips delivered to your inbox weekly.
                        </p>
                    </div>
                    {/* RIGHT: Email Input & Button */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:w-1/2 w-full flex flex-col md:items-end items-start"
                    >
                        <div className="flex items-center w-full max-w-xl">
                            <input
                                type="email"
                                required
                                placeholder="jane@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 py-3 px-6 rounded-l-sm rounded-r-none border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FB9E3A] text-sm bg-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black px-7 py-3 rounded-r-sm rounded-l-none font-semibold shadow transition hover:bg-neutral-200 cursor-pointer focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="mt-2 text-sm text-black/55 pl-3 pt-1">
                            Weekly newsletter. Unsubscribe anytime.
                        </div>
                    </form>
                </div>
            </motion.section>
        </div>
    )
}

export default Overlays