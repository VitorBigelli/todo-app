import logo_1 from './assets/img/logo_1.png'
import logo_2 from './assets/img/logo_2.png'
import TodoList from './components/TodoList';
import TaskInput from './components/TaskInput';
import { TaskProvider } from './context/tasks-context'
import { TypesContext } from './context/types-context'
import Toggle from './components/Toggle';
import { Col, Row, Container } from 'react-bootstrap';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/custom.css';

function App() {

  const { state: { type } } = useContext(TypesContext)

  return (
    <TaskProvider>
    <main className={`theme-${type}`}>
      <header className="text-center py-5 px-1">
        <h1>To Do App</h1> 
        <img src={type === '0' ? logo_1 : logo_2 } width="70px" alt="Ícone de uma checklist" />
      </header>
      <Container>
        <Row className='pb-3'>
          <Col className='text-center'>
            <Toggle />        
          </Col>
        </Row>
        <Row>
          <Col>
            <TaskInput />  
          </Col>
        </Row>
        <Row>
          <Col>
          <TodoList />
          </Col>
        </Row>
      </Container>
    </main>
    </TaskProvider>
  );
}

export default App;
