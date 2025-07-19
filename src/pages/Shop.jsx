import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { motion } from "motion/react"
import { div } from 'motion/react-client';
import MagicBento from '../components/MagneticBento';

const Shop = () => {
    return (
        <div className='w-full'>

            <MagicBento
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
            />
        </div>
    )
}

export default Shop