import React, { useContext } from 'react'
import Task from '../Task'
import { TaskContext } from '../../context/tasks-context'


const TodoList = ({ type }) => {

    const { state } = useContext(TaskContext)
    const { tasks } = state 
    const [ key, value ] = type

    return (
        <>
            <h3>{ value } </h3> 
            {
                tasks.sort( (a) => a.done ? 1 : -1 ).filter( (t) => t.type == key ).map( (task, index) => {
                    return <Task key={index} task={task} />
                })
            }
        </>
    )

}

export default TodoList