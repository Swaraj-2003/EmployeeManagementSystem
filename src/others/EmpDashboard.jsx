import { RiTaskLine } from '@remixicon/react'
import React from 'react'
import emp2 from '../images/emp2.jpg'
import Tasks from './Tasks';

const EmpDashboard = ({ isOpen, loggedInUser, setUser }) => {
  const { name, role } = loggedInUser
  const taskCount = name.taskNumbers
  const tasks = name.tasks
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  
  return (
    <div id="tasks" className='w-full h-[95%] p-2.5 pt-4 overflow-auto '>
      <div className='pb-5'>
        <h1 className='text-4xl font font-serif'>Dashboard</h1>
      </div>
      <div className='flex gap-37.5'>
        <div className={`${isOpen ? "container h-87.5 flex gap-4 flex-wrap w-162.5" : "h-45 flex justify-between  flex-wrap w-full"}`}>
          <div className="box shadow-xs shadow-black h-40 w-75 bg-[#efefef] rounded-xl flex flex-col gap-2.5  px-2.5 py-2.5 ">
            <div className='flex gap-2 items-center'>
              <RiTaskLine size={"30px"} />
              <h2 className='text-center text-black font-semibold font-sans'>New Task</h2>
            </div>
            <div className='border border-gray-300'></div>
            <h2 className=' text-4xl text-black font-semibold font-sans'>{name.taskNumbers.newTask}</h2>
          </div>
          <div className="box shadow-xs shadow-black h-40 w-75 bg-[#efefef] rounded-xl flex flex-col gap-2.5  px-2.5 py-2.5 ">
            <div className='flex gap-2 items-center'>
              <RiTaskLine size={"30px"} />
              <h2 className='text-center text-black font-semibold font-sans'>Completed</h2>
            </div>
            <div className='border border-gray-300'></div>
            <h2 className=' text-4xl text-black font-semibold font-sans'>{taskCount.completed}</h2>
          </div>
          <div className="box shadow-xs shadow-black h-40 w-75 bg-[#efefef] rounded-xl flex flex-col gap-2.5  px-2.5 py-2.5 ">
            <div className='flex gap-2 items-center'>
              <RiTaskLine size={"30px"} />
              <h2 className='text-center text-black font-semibold font-sans'>Active</h2>
            </div>
            <div className='border border-gray-300'></div>
            <h2 className=' text-4xl text-black font-semibold font-sans'>{taskCount.active}</h2>
          </div>
          <div className="box shadow-xs shadow-black h-40 w-75 bg-[#efefef] rounded-xl flex flex-col gap-2.5  px-2.5 py-2.5 ">
            <div className='flex gap-2 items-center'>
              <RiTaskLine size={"30px"} />
              <h2 className='text-center text-black font-semibold font-sans'>Failed</h2>
            </div>
            <div className='border border-gray-300'></div>
            <h2 className=' text-4xl text-black font-semibold font-sans'>{taskCount.failed}</h2>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className='shadow-xs shadow-black w-80 bg-[#efefef] rounded-xl px-3 py-2.5 flex gap-2.5 items-center '>
            <div className='h-29 w-30 rounded-full  overflow-hidden object-cover shrink-0 '>
              <img src={emp2} alt="img" className='h-30 w-30' />
            </div>
            <div className='flex flex-col gap-2.5 '>
              <h1 className='text-xl font-sans font-semibold capitalize'>Hii, {name.username}!</h1>
              <p className='text-xs font-sans font-semibold leading-4'>Your dedication drives our success.Ready to achieve great things today?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-12.5 mt-4 flex flex-wrap gap-5'>
        {tasks.map((ele, idx) => {
          return <Tasks
            taskTitle={ele.taskTitle}
            category={ele.category}
            taskDescription={ele.taskDescription}
            taskDate={ele.taskDate}
            loggedInUser={loggedInUser}
            index={idx}
            setUser={setUser}
            Isaccepted={ele.Isaccepted}
          />
        })}
      </div>
    </div>
  )
}

export default EmpDashboard
