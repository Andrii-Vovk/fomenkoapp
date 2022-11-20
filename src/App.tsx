import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/graph">Graph</Link>
        <Link to="/home">Home</Link>
      </header>
    </div>
  );
}

export default App;