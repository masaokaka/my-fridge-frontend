import { useEffect } from 'react';
import axios from 'axios';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const login = async (email: string, password: string) => {
    await axios.get('http://localhost:8080/sanctum/csrf-cookie', {
      withCredentials: true,
    });
    await axios.post(
      'http://localhost:8080/login',
      { email, password },
      { withCredentials: true }
    );
  };

  useEffect(() => {
    const result = login('demo3@example.com', 'secret');
    console.log(result);
  }, []);

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
