import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  // императивный стиль т.к. создаем состояние
  const [count, setCount] = useState(0)

  return (
    <>
      {/* html разметка также декларативная вся, помечу моменты с императивным стилем */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* императивный стиль т.к. говорим увеличить на 1 */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* так же императивный стиль */}
      <div className="year">{`Текущий год: ${new Date().getFullYear()}`}</div>
    </>
  )
}

export default App
