import { createContext, useReducer } from 'react'
import { makeid } from '../utils'

const defaultTasks = [
    {
      id: makeid(),
      name: "Desafio SalesForce", 
      done: false, 
      type: 1,
    }, 
    {
      id: makeid(),
      name: "Documentar projeto", 
      done: false, 
      type: 1,
    },
    {
      id: makeid(),
      name: "Consertar chuveiro", 
      done: false, 
      type: 0,
    }
  ]
  

export const TaskContext = createContext({
    tasks: defaultTasks
});

export const TaskReducer = (state, action) => {
  console.log(action)
    switch(action.type) {
        case 'add': {
            return { tasks: state.tasks.concat([ action.value ]) }
        }    
        case 'remove': {
            return { tasks: state.tasks.filter( (t) => t.id !== action.value.id ) }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}


export function TaskProvider({children}) {
    const [state, dispatch] = useReducer(TaskReducer, { tasks: defaultTasks })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function TaskConsumer({children}) {
    return (
      <TaskContext.Consumer>
        {context => {
          if (context === undefined) {
            throw new Error('CountConsumer must be used within a CountProvider')
          }
          return children(context)
        }}
      </TaskContext.Consumer>
    )
  }