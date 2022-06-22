import axios, { AxiosError, AxiosResponse } from 'axios';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  axios
    .get('http://localhost:8080/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer <token_here>',
      },
    })
    .then((res: AxiosResponse<number[]>) => console.log(`aaaa${res.data}`))
    .catch((e: AxiosError) => console.log(`bbbb${e.message}`));
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          sdvsv
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <span>
          <span>Learn AAAA</span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
