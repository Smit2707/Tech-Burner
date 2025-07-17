import React from 'react'
import { Card, CardFooter, Image, Button } from "@heroui/react";

const VideoCard = ({src}) => {
    return (
        <div className=''>
            <iframe width="560" height="315" className='rounded-lg' src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoCard