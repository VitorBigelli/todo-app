import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/tasks-context'
import DeleteIcon from '@material-ui/icons/Delete';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import EditIcon from '@material-ui/icons/Edit'
import { 
    InputGroup, 
    FormControl, 
    Button
} from 'react-bootstrap'

const Task = ({ task }) => {

    const { dispatch } = useContext(TaskContext);

    const [ showModal, toggleTaskModal ] = useState(false)
    const [ input, updateInput ] = useState(task.name)
    const [ isEditing, toggleEditor ] = useState(false)

    const toggleTaskStatus = () => {
        dispatch( { type: 'toggle', value: task } )
    }

    const onDelete = () => {
        dispatch( { type: 'remove', value: task })
    }


    const onMove = () => {
        dispatch( { type: 'move', value: task })
    }

    const handleTextChange = (e) => {
        updateInput(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch( { type: 'update', value: { ...task, name: input  } })
        toggleEditor(false) 
    }

    return (
        <div className={`task task-${task.type} ${task.done}`} htmlFor={task.id}>
            <div className='d-flex'>
                <label htmlFor={task.id}>
                    <input type="checkbox" id={task.id} checked={task.done} onChange={toggleTaskStatus}></input>
                    <div className='checkmark'></div>
                </label>
                { 
                    isEditing ? 
                    <form onSubmit={onSubmit}>
                        <InputGroup>
                            <FormControl
                                placeholder="Ex: Implementar TO DO App"
                                aria-label="Ex: Implementar TO DO App"
                                aria-describedby="task-input"
                                onChange={handleTextChange}
                                value={input}
                                maxLength={100}
                            />
                            <Button variant="dark" id="button-addon2" type='submit'>
                            Salvar
                            </Button>
                        </InputGroup>
                    </form> : 
                    <>
                        <span> { task.name }  </span>  
                        <EditIcon onClick={() => toggleEditor(!isEditing)} className='delete-btn mx-3' />
                    </>
                }
            </div>
            <div>                
                <CompareArrowsIcon onClick={onMove} className="delete-btn" size={20}  /> 
                <DeleteIcon onClick={onDelete} className="delete-btn" size={20} />
            </div>
        </div>
    )

}

export default Task