import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { motion } from "motion/react"
import { div } from 'motion/react-client';
import MagicBento from '../components/MagneticBento';
import ShopCard from '../components/ShopCard';
import { FaTshirt } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";

const Shop = () => {

    const shopData = [
        {
            title: "buy now or cry later",
            brand:"overlays",
            icon: <FaTshirt />,
            subTitle: "these stock won't last forever.Explore Your wild side with these latest trending t-shirts.",
            imageURL: "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-19_at_1.41.47_PM_2.jpg?v=1752923465&width=2000",
            redirect: "/overlays"
        },
        {
            title: "Designed in London.Made for India.",
            brand:"Layers",
            icon: <IoWatch />,
            subTitle: "Beauty and geometry come together to create Anarc’s unique octagonal dial.",
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
            className='w-full'>

            {/* <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            /> */}
            <div className='w-full h-full flex gap-10 items-center mt-15'>
                {shopData.map((card, idx) => <ShopCard title={card.title} sub={card.subTitle} URL={card.imageURL} key={idx} redirect={card.redirect} brand={card.brand} icon={card.icon} />)}
            </div>
        </motion.div>
    )
}

export default Shop