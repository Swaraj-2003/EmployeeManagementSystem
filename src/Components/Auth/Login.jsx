import React from 'react'
import Combine from './Combine'

const Login = ({handleLogin}) => {
    return (
        <div className=" bg-blue-800 h-screen w-full py-24 px-52">
            <Combine handleLogin={handleLogin} />
        </div>
    )
}

export default Login
