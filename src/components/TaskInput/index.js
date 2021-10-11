import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/tasks-context'
import { makeid } from '../../utils'
import { 
    ToggleButtonGroup,
    ToggleButton,
    Input
} from '@material-ui/core';
import {
    Button,
    FormControl,
    InputGroup
} from 'react-bootstrap'
import { TypesContext } from '../../context/types-context';

const InputCount = ({ text }) => {
    return ( 
        <span className="input-count"> {text.length ? text.length : 0} / 100 </span>
    )
}

const TaskInput = () => {

    const { dispatch } = useContext(TaskContext)

    const [ input, updateInput ] = useState('')
    const { state: { type } } = useContext(TypesContext)

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

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-around align-items-end position-relative pb-4">
            <InputCount text={input} />
            <InputGroup className="mb-3 mx-auto">
                <FormControl
                    placeholder="Ex: Implementar TO DO App"
                    aria-label="Ex: Implementar TO DO App"
                    aria-describedby="task-input"
                    onChange={handleTextChange}
                    value={input}
                    maxLength={100}
                />
                <Button variant="dark" id="button-addon2">
                Criar
                </Button>
            </InputGroup>

        </form>
    )

}

export default TaskInput