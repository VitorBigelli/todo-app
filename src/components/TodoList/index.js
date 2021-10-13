import React, { useContext } from 'react'
import Task from '../Task'
import { TaskContext } from '../../context/tasks-context'
import { TypesContext } from '../../context/types-context'


const TodoList = () => {

    const tasksContext = useContext(TaskContext)
    const { tasks } = tasksContext.state

    const typesContext = useContext(TypesContext) 
    const { type } = typesContext.state
    
    const [ key, value ] = type

    return (
        <>
            <h3>{ value } </h3> 
            {
                tasks.sort( (a) => a.done ? 1 : -1 ).filter( (t) => t.type === key ).map( (task, index) => {
                    return <Task key={task.id} task={task} />
                })
            }
        </>
    )

}

export default TodoList