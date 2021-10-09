import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/tasks-context'
import DeleteIcon from '@material-ui/icons/Delete';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const Task = ({ task }) => {

    const { dispatch } = useContext(TaskContext);

    const toggleTaskStatus = () => {
        dispatch( { type: 'toggle', value: task } )
    }

    const onDelete = () => {
        dispatch( { type: 'remove', value: task })
    }


    const onMove = () => {
        dispatch( { type: 'move', value: task })
    }

    return (
        <div className={`task task-${task.type} ${task.done}`} htmlFor={task.id}>
            <label htmlFor={task.id}>
                <input type="checkbox" id={task.id} checked={task.done} onChange={toggleTaskStatus}></input>
                <div className='checkmark'></div>
            </label>
            <span> { task.name }  </span>  
            <CompareArrowsIcon onClick={onMove} className="delete-btn" size={20} color="#333" /> 
            <DeleteIcon onClick={onDelete} className="delete-btn" size={20} color="#333" />
        </div>
    )

}

export default Task