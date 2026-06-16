import React from 'react'
import EmpDashboard from './EmpDashboard'
import RightHeading from './RightHeading'
import { Outlet, Route, Routes } from 'react-router-dom'


const RightSide2 = ({ isOpen, loggedInUser,setUser }) => {
  return (
    <div className={`${isOpen ? 'h-screen flex-1 min-w-0 flex-col gap-2.5 p-5' : 'h-screen flex-1 min-w-0 flex-col gap-2.5 px-10 ml-10 py-5'}`}>
      <RightHeading loggedInUser={loggedInUser} setUser={setUser} />
      <Outlet />
    </div>
  )
}

export default RightSide2
