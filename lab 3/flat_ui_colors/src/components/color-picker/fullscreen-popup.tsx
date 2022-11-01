import { motion } from 'framer-motion'
import '../../css/color-picker/fullscreen-popup-style.css'

interface FullscreenPopupProps {
    title?: string
    subTitle?: string
    color: string
}

export function FullscreenPopup(props: FullscreenPopupProps){
    const lighterColor = LightenDarkenColor(props.color, 40)
    const animationDuration = 0.3
    return(
        <motion.div className='absolute top-0 flex items-center w-full h-full z-10 overflow-hidden'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {opacity: {delay: animationDuration * 1.5}}}}>
            <motion.div className='flex items-center w-full h-full' style={{backgroundColor: props.color}}>
                <motion.div className='flex flex-col w-screen justify-center'
                    initial={{opacity: 0}}
                    animate={{scale: [1.3, 1.1], opacity: 1}}
                    exit={{scale: [1.1, 1], 
                    opacity: 0, 
                    transition: {
                        ease: "easeInOut",
                        opacity: {delay: animationDuration / 2, duration: animationDuration}}}}
                    transition={{duration: animationDuration}}>
                    <div className='flex justify-center items-center w-full h-36' style={{backgroundColor: lighterColor}}>
                        <p className='text-8xl font-semibold leading-none text-white text-shadow'>{props.title}</p>
                    </div>
                    <div className='flex justify-center w-full mt-16'>
                        <p className=' text-white text-3xl text-shadow'>{props.subTitle}</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

function LightenDarkenColor(col: string, amt: number) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}