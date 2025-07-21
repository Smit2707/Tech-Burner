import React from 'react'
import AutoCarousel from '../components/AutoCarousel'
import CommunitySlider from '../components/AutoCarousel'
import { motion } from "motion/react"
import MagicBento from '../components/MagneticBento'

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
                viewport={{ once: true, amount: 0.5 }}

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
                            <div key={idx} className="bg-[#ffffff] shadow-md overflow-hidden flex flex-col group transition hover:shadow-lg">
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
                                        <span className="text-[#E6521F] line-through text-base mb-0.5">{p.oldPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

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
                viewport={{ once: true, amount: 0.5 }}>
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
        </div>
    )
}

export default Overlays