import logo from '../src/imgs/usource.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Something great will happen.
        </p>
        <a
          className="App-link"
          href="https://www.usource.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit US!
        </a>
      </header>
    </div>
  );
}

export default App;
