import { createContext, useReducer, useEffect } from 'react'
import { makeid } from '../utils'

export const localTasks = JSON.parse(localStorage.getItem('TODO@tasks')).tasks

const defaultTasks = [
    {
      id: makeid(),
      name: "Desafio SalesForce", 
      done: false, 
      type: '1',
    }, 
    {
      id: makeid(),
      name: "Documentar projeto", 
      done: false, 
      type: '1',
    },
    {
      id: makeid(),
      name: "Consertar chuveiro", 
      done: false, 
      type: '0',
    }
  ]
  

export const TaskContext = createContext({
    tasks: defaultTasks
});

export const TaskReducer = (state, action) => {
    switch(action.type) {
        case 'add': {
            return { tasks: state.tasks.concat([ action.value ]) }
        }    
        case 'remove': {
            return { tasks: state.tasks.filter( (t) => t.id !== action.value.id ) }
        }
        case 'toggle': {
            return { 
              tasks: state.tasks.map( (t) => { 
                if (t.id === action.value.id) return { ...t, done: !t.done } 
                else return t  
              }) 
            }
        }
        case 'move': {
            return { 
              tasks: state.tasks.map( (t) => { 
                if (t.id === action.value.id) return { ...t, type: t.type === '0' ? '1' : '0' } 
                else return t  
              }) 
            }
        }
        case 'update': {
            return { 
              tasks: state.tasks.map( (t) => { 
                if (t.id === action.value.id) return { ...action.value } 
                else return t  
              }) 
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}


export function TaskProvider({children}) {
    const [state, dispatch] = useReducer(TaskReducer, { tasks: localTasks || defaultTasks })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}

    useEffect(() => {
      localStorage.setItem("TODO@tasks", JSON.stringify({ tasks: state.tasks }));
    }, [ state ]);

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