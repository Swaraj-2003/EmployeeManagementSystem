import React from 'react'

const Adminlocaltask = ({ Empdata }) => {

    return (
        <div className='bg-orange-400 text-white rounded border overflow-hidden'>

            <div className='grid grid-cols-5 bg-emerald-400 text-center font-semibold py-3'>
                <h3>Name</h3>
                <h3>New Tasks</h3>
                <h3>Active Tasks</h3>
                <h3>Completed</h3>
                <h3>Failed</h3>
            </div>

            {
                Empdata.map((user) => (
                    <div
                        key={user.id}
                        className='grid grid-cols-5 text-center py-3 border-t'
                    >
                        <h2 className='capitalize'>{user.username}</h2>

                        <h2>{user.taskNumbers.newTask}</h2>

                        <h2>{user.taskNumbers.active}</h2>

                        <h2>{user.taskNumbers.completed}</h2>

                        <h2>{user.taskNumbers.failed}</h2>
                    </div>
                ))
            }

        </div>
    )
}

export default Adminlocaltask