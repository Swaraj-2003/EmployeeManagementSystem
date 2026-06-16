import { RiLockFill, RiUser2Fill, RiUserFill } from '@remixicon/react'
import React, { useState } from 'react'
import { motion } from "motion/react"

const RightSide = ({ handleLogin }) => {

    const [Show, setShow] = useState(false)
    const [form, setform] = useState({
        username: "",
        password: ""
    })

    const getValues = (e) => {
        const { name, value } = e.target
        setform(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className='flex justify-center h-full w-2/4'>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}

                className="container w-4/6 py-5 ">
                <h1 className='text-4xl text-black font-bold font-sans my-1.5 px-2'>Sign In</h1>
                <p className=' px-2 pb-4 pt-2 text-xs whitespace-nowrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin(form.username, form.password)
                    setform({
                        username: "",
                        password: ""
                    })
                }} >
                    <div className="inputs flex flex-col gap-4.5 justify-between">
                        <div className="topInputs px-3 py-2.5 flex gap-1.5 items-center inp rounded">
                            <RiUserFill className='' />
                            <input required onChange={(e) => {
                                getValues(e)
                            }} className='border-0 outline-0 w-full' value={form.username} name='username' type="text" placeholder='User Name' />
                        </div>
                        <div className="bottomInputs inp px-3 py-2.5 flex gap-1.5 items-center inp rounded">
                            <RiLockFill className='' />
                            <input required onChange={(e) => {
                                getValues(e)
                            }} className='border-0 outline-0 w-full' value={form.password} name='password' type={`${Show ? "text" : "password"}`} placeholder='Password' />
                            <p onClick={() => {
                                setShow(!Show)
                            }} className='font-semibold text-xs text-blue-950 cursor-pointer'>SHOW</p>
                        </div>
                    </div>
                    <div className="options flex justify-between items-center py-4 px-2.5">
                        <div className="Cbox flex items-center gap-1.5">
                            <input className='size-4' type="checkbox" name="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <p>Forgot Password</p>
                    </div>
                    <div className="btns flex flex-col mt-2 gap-2">
                        <button onClick={() => {
                        }} className='bg-blue-950 px-2.5 py-2.5 rounded text-white text-xl hover:bg-blue-900 cursor-pointer'>Sign In</button>
                        <div className="separation flex items-center gap-3.5 ">
                            <div className="div border w-full h-0"></div>
                            <p className='text-xl'>or</p>
                            <div className="div border w-full h-0"></div>
                        </div>
                        <button className='px-2.5 py-2.5 rounded text-xl border'>Sign in with other</button>
                    </div>
                    <p className='text-xs my-6 text-center'>Dont have an Account? <a href="">Sign Up</a></p>
                </form>

            </motion.div>

        </div>
    )
}

export default RightSide
