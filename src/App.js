import logo from './logo.svg';
import './App.css';
import TestJSX from './components/TestJSX';
import Condition from './components/Condition';
import Fruits from './components/Fruits';
import Calculatrice from './components/Calculatrice';
import Pokedex from './components/Pokedex';

function App() {
  
  const tableau = ["bananes", "pommes", "oranges", "poires"]
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <TestJSX/> */}
        {/* <Condition boolean={true} /> */}
        {/* <Fruits data={tableau}/> */}
        <Pokedex/>


      </header>
    </div>
  );
}

export default App;
