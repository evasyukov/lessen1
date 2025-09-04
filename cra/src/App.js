import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // вся html разметка является декларативной, т.к. мы описываем какой результат хотим видеть
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* див с датой императивный, т.к. мы указываем что нужно сделать, чтобы получить результат  */}
        <div className="date">{`Текущий год: ${new Date().getFullYear()}`}</div>
      </header>
    </div>
  );
}

export default App;
