import React from 'react'

export const TaskCard = ({task, deleteTask}) => {
  return (
        <div key={task.id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={()=> deleteTask(task.
                id)}>Delete</button>
        </div>
  )
}
