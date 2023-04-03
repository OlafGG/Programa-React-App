import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import Fgreeating from './components/pure/fgreeating';
import TaskListComponent from './components/container/task.list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiContextoConContexto from './hooks/ejemplo3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente metido pa*/ }
        {/*<Greating name="Uriel"></Greating>*/}
        {/*Componente de listado de tareas*/}
        {/**Ejemplos de usos de hooks */}
        <MiContextoConContexto></MiContextoConContexto>
      </header>
    </div>
  );
}

export default App;
