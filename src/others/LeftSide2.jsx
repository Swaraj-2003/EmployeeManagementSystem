import React from 'react'
import { RiChatSmileAiLine, RiDashboard2Line, RiKanbanView2, RiTaskLine, RiUser3Line } from '@remixicon/react'
import Heading from "../others/Heading";
import Middle from '../others/Middle';
import { RiLogoutBoxLine } from '@remixicon/react'
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from 'react-router-dom';


const menuItem = [
  {
    title: "Dashboard",
    icon: RiDashboard2Line,
    rout: "/employee"
  },
  {
    title: "Projects",
    icon: RiKanbanView2,
    rout: "/employee/projects"
  },
  {
    title: "Attendance",
    icon: RiUser3Line,
    rout: "/employee/attendance"
  },
  {
    title: "Tasks",
    icon: RiTaskLine
  },
  {
    title: "Holidays",
    icon: RiChatSmileAiLine
  },
]

const LeftSide2 = ({ isOpen, setisOpen }) => {

  const location = useLocation()
  return (
    <AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          width: isOpen ? "330px" : "70px"
        }}
        transition={{
          duration: 0.3
        }} className={` bg-[#e8e8e8] h-screen shrink-0 w-1/5`}>

        <div className={`${isOpen ? "h-full flex shrink-0 flex-col gap-8 px-3.5 py-3" : "h-full flex flex-col gap-8 px-2 py-3"}`}>

          <Heading isOpen={isOpen} setisOpen={setisOpen} />

          <div className={`${isOpen ? ' py-5 flex flex-col gap-2.5' : "flex flex-col  py-5 gap-2.5"}`}>
            {menuItem.map((items, index) => {
              return <Middle
                title={items.title}
                icon={items.icon}
                key={index}
                isOpen={isOpen}
                rout={items.rout}
                isActive={location.pathname === items.rout}
              />
            })}
          </div>

          <div className='h-full flex items-end'>
            <div className='w-full'>
              {
                <Middle
                  title={"Log Out"}
                  icon={RiLogoutBoxLine}
                  isOpen={isOpen} />
              }
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LeftSide2
