import { hover } from '@testing-library/user-event/dist/hover'
import { motion } from 'framer-motion'

const arrowMotion = {
    rest: {
        opacity: 0,
        x: -3,
        transition: {
            duration: 0.2
        }
    },
    hover: {
        opacity: 1,
        x: 3,
        transition: {
            duration: 0.2,
        }
    }
}

interface AnimatedLinkWithArrowProps {
    title: string
}

export function AnimatedLinkWithArrow(props: AnimatedLinkWithArrowProps){
    return(
        props.title === "" ? 
            <div className=' h-6'></div> 
            : 
            <motion.div initial='rest' whileHover='hover' animate='rest' className='flex flex-row'>
                <motion.button className=' text-slate-50 text-sm font-bold tracking-wider'>{props.title}</motion.button>
                <motion.p variants={arrowMotion} className='text-slate-50'>→</motion.p>
            </motion.div>
    )
}
