import React, { useState, useContext } from 'react'
import { TaskConsumer, TaskContext } from '../../context/tasks-context'
import { makeid } from '../../utils'
import { 
    Button,
    ToggleButtonGroup,
    ToggleButton,
    Input
} from '@material-ui/core';

const InputCount = ({ text }) => {
    return ( 
        <span className="input-count"> {text.length ? text.length : 0} / 100 </span>
    )
}

const TaskInput = ({ types }) => {

    const { dispatch } = useContext(TaskContext)

    const [ input, updateInput ] = useState('')
    const [ type, updateType ] = useState(null)

    const handleTextChange = (e) => {
        const text = e.target.value
        updateInput(text)
    }

    const handleSubmit = (e) => {        
        e.preventDefault()

        if (!type) alert('Selecione uma classe para sua tarefa')
        else {
            const task = {
                id: makeid(),
                name: input,
                type: type,
                done: false 
            }
            dispatch( { type: 'add', value: task } )
            updateInput('')
        }
    }

    const handleTypeChange = (e) => {
        const value = e.target.value
        updateType(value)
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-around align-items-end position-relative pb-4">
            <ToggleButtonGroup
                color="primary"
                exclusive
                value={type}
                onChange={handleTypeChange}
            >
                { Object.entries(types).map( (type, index) => {
                    return <ToggleButton value={type[0]} key={index}> {type[1]} </ToggleButton>;
                })}
            </ToggleButtonGroup>
            <Input onChange={handleTextChange} value={input} className="flex-grow mx-2" inputProps={{ maxLength: 100 }} />
            <InputCount text={input} />
            <Button type="submit" variant='contained'> OK </Button>
        </form>
    )

}

export default TaskInput