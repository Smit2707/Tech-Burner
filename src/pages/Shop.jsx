import React from 'react'
import { motion } from "framer-motion"
import { FaTshirt } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
import ShopCard from '../components/ShopCard';

const Shop = () => {
    const shopData = [
        {
            title: "buy now or cry later",
            brand: "overlays",
            icon: <FaTshirt />,
            subTitle: "These stocks won't last forever. Explore your wild side with these latest trending t-shirts.",
            imageURL: "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM_2.jpg?v=1752923465&width=2000",
            redirect: "/overlays"
        },
        {
            title: "Designed in London. Made for India.",
            brand: "Layers",
            icon: <IoWatch />,
            subTitle: "Beauty and geometry come together to create Anarc's unique octagonal dial.",
            imageURL: "https://www.layers.shop/cdn/shop/files/founders_2.webp?v=1725254683",
            redirect: "/layers"
        }
    ]

    return (
        <motion.div
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
            className='w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12'
        >
            <div className='w-full h-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center justify-center'>
                {shopData.map((card, idx) => (
                    <ShopCard 
                        key={idx}
                        title={card.title}
                        sub={card.subTitle}
                        URL={card.imageURL}
                        redirect={card.redirect}
                        brand={card.brand}
                        icon={card.icon}
                        className="w-full md:w-1/2"
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Shop