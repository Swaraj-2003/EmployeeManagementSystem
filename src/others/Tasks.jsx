import React, { useContext, useState } from 'react'
import { motion } from 'motion/react'
import { UserLogin } from '../Context/Authcontext'

const Tasks = ({ taskTitle,
    category,
    taskDescription,
    taskDate, loggedInUser, index, setUser }) => {
    const [Isaccepted, setIsaccepted] = useState(false)

    const employee = JSON.parse(localStorage.getItem("employee"))

    const UpdateData = (index) => {

        const updatedData = loggedInUser.name.tasks.filter((_, idx) => {
            return idx !== index
        })

        const updatedUser = {
            ...loggedInUser,
            name: {
                ...loggedInUser.name,
                tasks: updatedData,
                taskNumbers: {
                    ...loggedInUser.name.taskNumbers,
                    completed: loggedInUser.name.taskNumbers.completed + 1,
                    active: loggedInUser.name.taskNumbers.active - 1,
                    newTask: loggedInUser.name.taskNumbers.newTask - 1
                }
            }
        }

        setUser(updatedUser)

        localStorage.setItem(
            "loggedUser",
            JSON.stringify(updatedUser)
        )

        const updatedEmployees = employee.map((emp) => {

            if (emp.id === loggedInUser.name.id) {

                return {
                    ...emp,
                    tasks: updatedData,
                    taskNumbers: {
                        ...emp.taskNumbers,
                        completed: emp.taskNumbers.completed + 1,
                        active: emp.taskNumbers.active - 1,
                        newTask: emp.taskNumbers.newTask - 1
                    }
                }
            }

            return emp
        })

        localStorage.setItem(
            "employee",
            JSON.stringify(updatedEmployees)
        )
    }

    return (
        <motion.div initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            key={index}
            className='box box shadow-xs shadow-black h-62.5 w-62 p-3 py-5 rounded-xl flex flex-col gap-3.5 bg-[#efefef] '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-800 rounded text-white px-2.5 py-0.5 '>{category}</h3>
                <h4 className='text-black  font-sans font-semibold text-shadow-xs text-shadow-white'>{taskDate}</h4>
            </div>
            <div className='flex flex-col gap-2.5'>
                <h2 className='text-xl font-sans font-semibold capitalize'>{taskTitle}</h2>
                <p className='text-sm '>{taskDescription}</p>
            </div>
            <div className='mt-5 flex justify-between'>
                <button onClick={() => {
                    UpdateData(index)
                }} className='px-2 py-1 bg-green-500 rounded text-white font-semibold font-sans cursor-pointer'>
                    Completed
                </button>
                <button disabled={Isaccepted} onClick={() => {
                }} className={`${Isaccepted ? 'px-2 py-1 bg-red-500 disabled:cursor-not-allowed rounded text-white font-semibold font-sans cursor-pointer' : 'px-2 py-1 bg-green-500 rounded text-white font-semibold font-sans cursor-pointer'}`}>
                    {
                        Isaccepted ? "Accepted" : "Accept"
                    }
                </button>
            </div>
        </motion.div>
    )
}

export default Tasks
