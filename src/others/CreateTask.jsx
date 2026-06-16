import React, { useState } from 'react'
import { RiAddBoxLine } from '@remixicon/react'

const CreateTask = ({ Empdata, setEmpdata, setUser, loggedInUser }) => {

    const employee = JSON.parse(localStorage.getItem("employee"))
    const loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
    )

    const [taskData, settaskData] = useState({
        taskTitle: "",
        taskDescription: "",
        taskDate: "",
        assignTo: "",
        category: ""
    })

    const setData = (e) => {
        const { name, value } = e.target;
        settaskData(prev => ({
            ...prev, [name]: value, active: false,
            newTask: true,
            completed: false,
            failed: false,
            Isaccepted: false
        }))
    }


    const updateData = () => {

        const updateEmployee = employee.map((user) => {

            if (user.username === taskData.assignTo) {

                return {
                    ...user,

                    tasks: [...user.tasks, taskData],

                    taskNumbers: {
                        ...user.taskNumbers,
                        newTask: user.taskNumbers.newTask + 1,
                        active: user.taskNumbers.active + 1,
                    }
                }
            }

            return user
        })
        
        setEmpdata(updateEmployee)
        localStorage.setItem(
            "employee",
            JSON.stringify(updateEmployee)
        )

        if (loggedUser?.name?.username === taskData.assignTo) {

            const updatedLoggedUser = {
                ...loggedUser,

                name: {
                    ...loggedUser.name,

                    taskNumbers: {
                        ...loggedUser.name.taskNumbers,
                        newTask: loggedUser.name.taskNumbers.newTask + 1,
                        active: loggedUser.name.taskNumbers.active + 1,
                    }
                }
            }

            localStorage.setItem(
                "loggedUser",
                JSON.stringify(updatedLoggedUser)
            )

            setUser(updatedLoggedUser)
        }

        alert("Task Created Successfully!")
    }


    return (
        <div className='px-5 bg-gray-900 rounded text-white py-2.5 border w-100 '>
            <div className='flex gap-2 items-center py-2.5'>
                <RiAddBoxLine size={"30px"} />
                <h1 className='text-3xl font-sans font-semibold'>Create Task</h1>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(taskData);
                updateData()
                settaskData({
                    taskTitle: "",
                    taskDescription: "",
                    taskDate: "",
                    assignTo: "",
                    category: ""
                })

            }} className='py-4 px-1.5'>

                <div className='py-2 flex flex-col gap-1.5'>
                    <h3 className='text-lg font-sans font-semibold'>Task Title</h3>
                    <input onChange={(e) => {
                        setData(e)
                    }} className='border-0 outline-0 px-1.5 py-1.5 bg-gray-700 rounded placeholder:text-white' name='taskTitle' type="text" value={taskData.taskTitle} placeholder='Make a UI design' />
                </div>
                <div className='py-2 flex flex-col gap-1.5'>
                    <h3 className='text-lg font-sans font-semibold'>Description</h3>
                    <textarea onChange={(e) => {
                        setData(e)
                    }} className='border-0 outline-0 px-1.5 py-1.5 bg-gray-700 rounded placeholder:text-white' value={taskData.taskDescription} name="taskDescription" id=""></textarea>
                </div>
                <div className='py-2 flex flex-col gap-1.5'>
                    <h3 className='text-lg font-sans font-semibold'>Date</h3>
                    <input onChange={(e) => {
                        setData(e)
                    }} className='border-0 outline-0 px-1.5 py-1.5 bg-gray-700 rounded placeholder:text-white' value={taskData.taskDate} type="date" name="taskDate" id="" />
                </div>
                <div className='py-2 flex flex-col gap-1.5'>
                    <h3 className='text-lg font-sans font-semibold'>Assign to</h3>
                    <input onChange={(e) => {
                        setData(e)
                    }} className='border-0 outline-0 px-1.5 py-1.5 bg-gray-700 rounded placeholder:text-white' name='assignTo' value={taskData.assignTo} type="text" placeholder='Employee' />
                </div>
                <div className='py-2 flex flex-col gap-1.5'>
                    <h3 className='text-lg font-sans font-semibold'>Category </h3>
                    <input onChange={(e) => {
                        setData(e)
                    }} className='border-0 outline-0 px-1.5 py-1.5 bg-gray-700 rounded placeholder:text-white' name='category' value={taskData.category} type="text" placeholder='design , development etc.' />
                </div>
                <div className='py-4 flex flex-col gap-1.5'>
                    <button className='bg-green-500 px-2.5 py-2 rounded text-lg font-semibold hover:bg-green-400 cursor-pointer'>Create Task</button>
                </div>
            </form>
        </div >
    )
}

export default CreateTask
