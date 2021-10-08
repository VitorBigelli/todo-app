import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/tasks-context'

const Task = ({ task }) => {

    const { dispatch } = useContext(TaskContext);

    const [ isDone, toggleDone ] = useState(task.done)

    const toggleTaskStatus = () => {
        toggleDone(!isDone)
    }

    const onDelete = () => {
        dispatch( { type: 'remove', value: task })
    }

    return (
        <label className={`task task-${task.type}`} htmlFor={task.id}>
            <input type="checkbox" id={task.id} checked={isDone} onChange={toggleTaskStatus}></input>
            <div className='checkmark'></div>
            <span> { task.name }  </span> 
            <button onClick={onDelete}> x </button>
        </label>
    )

}

export default Task