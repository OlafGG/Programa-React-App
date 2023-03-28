import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import Fgreeating from './components/pure/fgreeating';
import TaskListComponent from './components/container/task.list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente metido pa*/ }
        {/*<Greating name="Uriel"></Greating>*/}
        {/*Componente de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
