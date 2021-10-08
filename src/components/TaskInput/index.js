import React, { useState, useContext } from 'react'
import { TaskConsumer, TaskContext } from '../../context/tasks-context'
import { makeid } from '../../utils'

const TaskInput = ({ types }) => {

    const { state, dispatch } = useContext(TaskContext)

    const [ input, updateInput ] = useState('')
    const [ type, updateType ] = useState(0)

    const handleTextChange = (e) => {
        const text = e.target.value
        updateInput(text)
    }

    const handleSubmit = () => {
        const task = {
            id: makeid(),
            name: input,
            type: type,
            done: false 
        }
        dispatch( { type: 'add', value: task } )
    }

    const handleTypeChange = (e) => {
        const value = e.target.value
        updateType(value)
    }

    return (
        <>
            <select onChange={handleTypeChange}>
            { Object.entries(types).map( (type, index) => {
                return <option value={type[0]} key={index}> {type[1]} </option>;
            })}
            </select>
            <input type="text" onChange={handleTextChange} value={input} />
            <button onClick={handleSubmit}> Salvar </button>
        </>
    )

}

export default TaskInput