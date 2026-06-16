import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "motion/react";

const Middle = ({ title, icon: Icon, isOpen, rout, isActive }) => {
    return (
        <Link to={rout} className={`${isOpen ? "px-4 py-2.5 rounded w-full flex gap-2.5 items-center hover:bg-[#dedcc9]" : "px-0 py-2.5 rounded flex gap-3 items-center justify-center"} ${isActive ? "bg-white hover:bg-white" : "bg-[#e8e8e8]"}`}>
            <div className='flex gap-2.5 items-center' >
                <Icon />
                <AnimatePresence>
                    {isOpen && (<motion.h1 initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-xl font-semibold font-sans whitespace-nowrap ${isOpen ? "block" : "hidden"}`}>
                        {title}
                    </motion.h1>)}
                </AnimatePresence>
            </div>
        </Link>
    )
}

export default Middle

