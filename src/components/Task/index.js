import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/tasks-context'
import { MdDelete } from 'react-icons/md'

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
            <MdDelete onClick={onDelete} className="delete-btn" size={20} color="#333" /> 
        </label>
    )

}

export default Task