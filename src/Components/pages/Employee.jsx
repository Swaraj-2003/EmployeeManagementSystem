import React from 'react'
import LeftSide2 from '../../others/LeftSide2'
import RightSide2 from '../../others/RightSide2'

const Employee = ({ isOpen, setisOpen,loggedInUser,setUser}) => {
    return (
        <div className='h-screen w-full bg-[#dedede] flex items-center'>
             <LeftSide2 isOpen={isOpen} setisOpen={setisOpen}/>
            <RightSide2 isOpen={isOpen} loggedInUser={loggedInUser} setUser={setUser}/>
        </div>
    )
}

export default Employee
