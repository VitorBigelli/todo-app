import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/tasks-context'
import DeleteIcon from '@material-ui/icons/Delete';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import EditIcon from '@material-ui/icons/Edit'
import TaskModal from '../TaskModal';

const Task = ({ task }) => {

    const { dispatch } = useContext(TaskContext);

    const [ showModal, toggleTaskModal ] = useState(false)

    const toggleTaskStatus = () => {
        dispatch( { type: 'toggle', value: task } )
    }

    const onDelete = () => {
        dispatch( { type: 'remove', value: task })
    }


    const onMove = () => {
        dispatch( { type: 'move', value: task })
    }


    const onEdit = () => {
        dispatch( { type: 'move', value: task })
    }

    console.log(showModal)

    return (
        <div className={`task task-${task.type} ${task.done}`} htmlFor={task.id}>
            <label htmlFor={task.id}>
                <input type="checkbox" id={task.id} checked={task.done} onChange={toggleTaskStatus}></input>
                <div className='checkmark'></div>
            </label>
            <span> { task.name }  </span>  
            <EditIcon onClick={() => toggleTaskModal(!showModal)} className='delete-btn' size={20} />
            <CompareArrowsIcon onClick={onMove} className="delete-btn" size={20}  /> 
            <DeleteIcon onClick={onDelete} className="delete-btn" size={20} />
            <TaskModal task={task} show={showModal}  onClose={ () => toggleTaskModal(!showModal)}/>
        </div>
    )

}

export default Task