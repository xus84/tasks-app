import './App.css'
import { TaskList } from './components/TaskList'
import {TaskForm} from './components/TaskForm'
import {tasks as data} from './data/tasks'
import { useState, useEffect } from 'react'



function App() {

        const [tasks, setTasks] = useState([])

        useEffect(() => {
                setTasks(data)
        },[ ])

        const createTask = (task) => {
              setTasks([...tasks,{ 
                title: task.title,
                id: tasks.length,
                description: task.description}])  
        }

  return (
    <div className="App">
        <TaskForm createTask={createTask} />
       <TaskList tasks={tasks} />
    </div>
  )
}

export default App
