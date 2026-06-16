const Employee = [
    {
        id: 1,
        username: "rahul",
        password: "123",

        taskNumbers: {
            active: 0,
            newTask: 2,
            completed: 0,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Login Page",
                taskDescription: "Create responsive login UI using React and Tailwind CSS.",
                taskDate: "2026-06-03",
                category: "Frontend",
                   Isaccepted: false
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Navbar Bug",
                taskDescription: "Resolve mobile navbar overlapping issue.",
                taskDate: "2026-05-28",
                category: "Bug Fix",
                   Isaccepted: false
            }
        ]
    },

    {
        id: 2,
        username: "priya",
        password: "123",

        taskNumbers: {
            active: 0,
            newTask: 2,
            completed: 0,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "API Integration",
                taskDescription: "Connect frontend with employee management API.",
                taskDate: "2026-06-04",
                category: "Backend",
                   Isaccepted: false
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Database Backup",
                taskDescription: "Take backup of production database.",
                taskDate: "2026-05-25",
                category: "Database",
                   Isaccepted: false
            }
        ]
    },

    {
        id: 3,
        username: "amit",
        password: "123",

        taskNumbers: {
            active: 0,
            newTask: 2,
            completed: 0,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Create Dashboard",
                taskDescription: "Develop admin dashboard with charts and cards.",
                taskDate: "2026-06-05",
                category: "Frontend",
                   Isaccepted: false
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Optimize Images",
                taskDescription: "Compress website images for faster loading.",
                taskDate: "2026-05-30",
                category: "Optimization" , 
                  Isaccepted: false
            }
        ]
    },

    {
        id: 4,
        username: "sneha",
        password: "123",

        taskNumbers: {
            active: 0,
            newTask: 2,
            completed: 0,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Testing Authentication",
                taskDescription: "Test login and signup authentication flow.",
                taskDate: "2026-06-06",
                category: "Testing",
                   Isaccepted: false
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy Application",
                taskDescription: "Deploy React application to production server.",
                taskDate: "2026-05-27",
                category: "Deployment",
                   Isaccepted: false
            }
        ]
    },

    {
        id: 5,
        username: "vikas",
        password: "123",

        taskNumbers: {
            active: 0,
            newTask: 2,
            completed: 0,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build User Profile",
                taskDescription: "Create editable user profile section.",
                taskDate: "2026-06-07",
                category: "Frontend",
                   Isaccepted: false
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup Git Repository",
                taskDescription: "Initialize and configure GitHub repository.",
                taskDate: "2026-05-26",
                category: "Version Control",
                   Isaccepted: false
            }
        ]
    }
]

const Admin = [{
    id: 1,
    username: "Admin",
    password: "123"
}]



export const setLocalstorage = () => {
    localStorage.setItem("employee", JSON.stringify(Employee))
    localStorage.setItem("admin", JSON.stringify(Admin))
}
export const getLocalstorageEmp = () => {
    const response = localStorage.getItem("employee")
    const data = JSON.parse(response)
    return data
}
export const getLocalstorageAdm = () => {
    const response = localStorage.getItem("admin")
    const data = JSON.parse(response)
    return data
}
