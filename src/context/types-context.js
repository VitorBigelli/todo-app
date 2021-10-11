import { createContext, useReducer } from 'react'
import { makeid } from '../utils'

export const TypesContext = createContext({
    type: '0'
});

export const TypesReducer = (state, action) => {
    switch(action.type) {
        case 'toggle': {
            return { type: state.type === '0' ? '1' : '0' }
        }    
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}


export function TypesProvider({children}) {
    const [state, dispatch] = useReducer(TypesReducer, { type: '0' })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
    return <TypesContext.Provider value={value}>{children}</TypesContext.Provider>
}

export function TypeConsumer({children}) {
    return (
      <TypesContext.Consumer>
        {context => {
          if (context === undefined) {
            throw new Error('CountConsumer must be used within a CountProvider')
          }
          return children(context)
        }}
      </TypesContext.Consumer>
    )
  }