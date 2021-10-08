import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/custom.css';
import TodoList from './components/TodoList';
import TaskInput from './components/TaskInput';
import { TaskProvider, TaskContext } from './context/tasks-context'

const types = {
  0: 'Personal', 
  1: 'Work'
}

const tasks = [
  {
    id: "1",
    name: "Desafio SalesForce", 
    done: false, 
    type: 1,
  }, 
  {
    id: "2",
    name: "Documentar projeto", 
    done: false, 
    type: 1,
  },
  {
    id: "3",
    name: "Consertar chuveiro", 
    done: false, 
    type: 0,
  }
]


function App() {

  return (
    <TaskProvider>
      <header className="text-center py-5 px-1">
        <h1>TO DO</h1> 
      </header>
      <main className="container">
        <div className="row">
          <div className="col-12 text-center">
            <TaskInput types={types} />
          </div>
        </div>
        <div className="row">
          { Object.entries(types).map( (type, index) => {
            return (
              <div className="col-6">
                <TodoList key={index} type={type} />
              </div>
            )
          })}
        </div>
      </main>
    </TaskProvider>
  );
}

export default App;
