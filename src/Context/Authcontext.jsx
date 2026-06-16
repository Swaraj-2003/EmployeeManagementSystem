import React, { useState } from 'react'
import { createContext } from 'react'
import { getLocalstorageAdm, getLocalstorageEmp } from '../others/Localstorage'

export const UserLogin = createContext()
export const LoggedInuser = createContext()

const Authcontext = ({ children }) => {
  const [Empdata, setEmpdata] = useState(getLocalstorageEmp())
  const [Admdata, setAdmdata] = useState(getLocalstorageAdm())
  const [User, setUser] = useState(() => {
    const loggedUser = localStorage.getItem("loggedUser")
    return loggedUser ? JSON.parse(loggedUser) : { name: "", role: "" }
  })

  return (
    <UserLogin.Provider value={[Empdata, Admdata,setEmpdata,setAdmdata]}>
      <LoggedInuser.Provider value={[User, setUser]}>
        {children}
      </LoggedInuser.Provider>
    </UserLogin.Provider>
  )
}

export default Authcontext
