import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import Employee from './Components/pages/Employee'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import EmpDashboard from "../src/others/EmpDashboard";
import Projects from './others/Projects';
import Attendance from './others/Attendance'
import Admin from './Components/pages/Admin'
import { LoggedInuser, UserLogin } from './Context/Authcontext';
import { setLocalstorage } from './others/Localstorage';


const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [Empdata, Admdata] = useContext(UserLogin)
  const [isOpen, setisOpen] = useState(true)
  const [User, setUser] = useContext(LoggedInuser)

  const handleLogin = (username, password) => {

    const Employee = Empdata.find((user) => {
      return (
        user.username === username &&
        user.password === password
      )
    })

    const Admin = Admdata.find((user) => {
      return (
        user.username === username &&
        user.password === password
      )
    })

    if (Employee) {

      const loggedUser = {
        name: Employee,
        role: "Employee"
      }

      setUser(loggedUser)

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(loggedUser)
      )
    }

    else if (Admin) {

      const loggedUser = {
        name: Admin,
        role: "Admin"
      }

      setUser(loggedUser)

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(loggedUser)
      )
    }

    else {
      alert("Incorrect Username Or Password")
    }
  }

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem(("loggedUser")))
    if (loggedUser) {
      setUser(loggedUser)
    }
  }, [])

  useEffect(() => {
    if (User.name === "" || User.role === "") {
      navigate("/")
    }
    else {
      if (User.role === "Employee" && location.pathname === "/") {
        navigate("/employee")
      }
      else if (User.role === "Admin" && location.pathname === "/") {
        navigate("/admin")
      }
    }
  }, [User, navigate, location.pathname])


  return (
    <div>
      {<Routes>
        <Route path='/' element={<Login handleLogin={handleLogin} />} />
        <Route path='/employee' element={<Employee isOpen={isOpen} setisOpen={setisOpen} loggedInUser={User} setUser={setUser} />}>
          <Route index element={<EmpDashboard isOpen={isOpen} loggedInUser={User} setUser={setUser} />} />
          <Route path='projects' element={<Projects />} />
          <Route path='attendance' element={<Attendance />} />
        </Route>
        <Route path='/admin' element={<Admin setUser={setUser} loggedInUser={User} />} />
      </Routes>}
    </div >
  )
}

export default App
