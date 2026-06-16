import React, { useContext, useState } from 'react'
import RightHeading from '../../others/RightHeading'

import CreateTask from '../../others/CreateTask'
import Admintasks from '../../others/Admintasks'
import { create } from 'motion/react-m'
import { UserLogin } from '../../Context/Authcontext'

const Admin = ({ setUser, loggedInUser }) => {
    const [Empdata, Admdata, setEmpdata, setAdmdata] = useContext(UserLogin)

    return (
        <div className='h-screen w-full px-2.5 py-5'>
            <div>
                <RightHeading />
            </div>
            <div className='py-2.5 flex justify-center items-center'>
                <CreateTask Empdata={Empdata} setEmpdata={setEmpdata} setUser={setUser} loggedInUser={loggedInUser} />
            </div>
            <div className='py-2.5'>
                <Admintasks Empdata={Empdata} />
            </div>
        </div>
    )
}

export default Admin
