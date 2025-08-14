"use client";

import { useMediaQuery } from "@mui/material";
import { source } from "framer-motion/client";


export const VideoBackground = () => {
    
    const isMobile = useMediaQuery('(max-width: 639px)', { noSsr: true });
    
    
    return (

        <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >   
            {!isMobile &&
            <source src="/small.mp4" type="video/mp4" />
            }
            
            <source src="/high.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
        </video>

    ); 
}

