import React, { useContext, useState } from 'react'
import { RiArrowDownFill, RiArrowDownLine, RiArrowDownSLine, RiArrowLeftSLine, RiUser3Line } from '@remixicon/react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { LoggedInuser } from '../Context/Authcontext'

const RightHeading = () => {

    const [User, setUser] = useContext(LoggedInuser)

    const userName = User.name
    const navigate = useNavigate()

    const [Show, setShow] = useState(false)
    return (
        <div className='flex justify-end relative  p-1.5'>
            <div className='px-3.5 py-1.5 rounded bg-red-800 flex gap-1.5 items-center'>
                <div>
                    <RiUser3Line className='icon' color='white' size={"25px"} />
                </div>
                <h2 className='text-xl font-semibold font-sans text-white capitalize'>
                    {userName.username }
                </h2>
                <button className='cursor-pointer' onClick={() => {
                    setShow(!Show)
                }}>
                    {
                        Show ? (<RiArrowDownSLine className='icon' color='white' size={"25px"} />) : (<RiArrowLeftSLine className='icon' color='white' size={"25px"} />)
                    }
                </button>

            </div>
            {
                Show && <motion.div initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1.02, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{
                        duration: 0.3
                    }}
                    className='h-15 w-23 top-12  absolute bg-white rounded shadow-2xs shadow-gray-800 flex justify-center items-center '>
                    <button onClick={() => {
                        localStorage.removeItem("loggedUser")
                        setUser({
                            name: "",
                            role: ""
                        })
                        navigate("/")
                    }} className='px-2.5 py-1.5 rounded bg-amber-900 flex gap-1.5 text-white items-center cursor-pointer'>Log Out</button>
                </motion.div>
            }
        </div>
    )
}

export default RightHeading
