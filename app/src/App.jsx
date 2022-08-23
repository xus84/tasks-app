import './App.css'
import { TaskList } from './TaskList'
import {TaskForm} from './TaskForm'
import {tasks as data} from './tasks'
import { useState, useEffect } from 'react'



function App() {

        const [tasks, setTasks] = useState([])

        useEffect(() => {
                setTasks(data)
        },[ ])

        const createTask = (taskTitle) => {
              setTasks([...tasks,{ 
                title: taskTitle,
                id: tasks.length,
                description: 'a task 4'}])  
        }

  return (
    <div className="App">
        <TaskForm createTask={createTask} />
       <TaskList tasks={tasks} />
    </div>
  )
}

export default App
