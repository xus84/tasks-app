import React from 'react'
import { useState } from 'react'

export const TaskForm = ({createTask}) => {

        const [title, setTitle] = useState('')

        const handleSubmit = (e) => {
                e.preventDefault()
              
                createTask(title)
        }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Write your Task' onChange={(e)=> { setTitle(e.target.value)}}/>
        <button>SAVE</button>
    </form>
  )
}
