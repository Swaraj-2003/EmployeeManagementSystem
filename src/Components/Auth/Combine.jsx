import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { motion, AnimatePresence } from "motion/react"

const Combine = ({handleLogin}) => {
  return (
    <AnimatePresence>
      <motion.div initial={{
        opacity: 0,
        scale:0.9
      }}
        animate={{
          opacity: 1,
          scale:1
        }}
        exit={{
          opacity: 0,
          scale:0.9
        }}

        transition={{
          duration: 0.6,
          delay: 0.5
        }}
        className=' flex rounded-2xl h-full w-full bg-amber-50 shadow-lg shadow-black'>
        <LeftSide />
        <RightSide handleLogin={handleLogin} />
      </motion.div>
    </AnimatePresence>
  )
}

export default Combine
