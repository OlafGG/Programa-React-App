import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import Fgreeating from './components/pure/fgreeating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente metido pa*/ }
        {/*<Greating name="Uriel"></Greating>*/}
        <Fgreeating name="Uriel"></Fgreeating>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
