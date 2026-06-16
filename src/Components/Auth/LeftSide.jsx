import React from 'react'
import {motion} from "motion/react"

const LeftSide = () => {
    return (
        <motion.div 
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.8 , delay:1.2}}
        
        className=' relative h-full w-2/4 rounded-2xl overflow-hidden'>
            <div className="cont absolute z-10 text-white top-20 left-30 flex flex-col gap-3 ">
                <h1 className='text-5xl font-semibold font-sans text-shadow-lg tracking-wide'>WELCOME</h1>
                <h3 className='text-2xl font-semibold font-sans text-shadow-lg tracking-wide'>YOUR NAME</h3>
                <p className='text-xs font-semibold font-sans leading-6 text-shadow-lg tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Placeat, natus quibusdam inventore quisquam eligendi<br /> molestias at earum nam mollitia? Iste!</p>
            </div>
            <div className='absolute h-190 w-190 rounded-full bg-linear-to-r from-blue-700 to-blue-950 -top-70 -left-50 z-0'>
            </div>
            <div className=' absolute h-90 w-90 bg-linear-to-r from-blue-600 to-blue-950 rounded-full -bottom-30 -left-30 z-10 shadow-xl shadow-black '>

            </div>
            <div className=' absolute h-55 w-55 bg-linear-to-r from-blue-800 to-blue-950 rounded-full bottom-15 right-6 z-10 shadow-lg shadow-black '>

            </div>
        </motion.div>
    )
}

export default LeftSide
