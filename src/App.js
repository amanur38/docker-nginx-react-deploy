import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<ComponentOne />} />
        <Route path="/two" element={<ComponentTwo />} />
      </Routes>
    </Router>
  );
}

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/one"}>Screen One</Link>
          <Link to={"/two"}>Screen Two</Link>
        </nav>
        <h5>Welcome to Home Screen</h5>

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
      </header>
    </div>
  );
}

export function ComponentOne() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/one"}>Screen One</Link>
          <Link to={"/two"}>Screen Two</Link>
        </nav>
        <h5>Welcome to Screen One</h5>

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
      </header>
    </div>
  );
}

export function ComponentTwo() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/one"}>Screen One</Link>
          <Link to={"/two"}>Screen Two</Link>
        </nav>
        <h5>Welcome to Screen Two</h5>

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
      </header>
    </div>
  );
}
