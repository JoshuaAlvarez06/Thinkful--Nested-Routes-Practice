import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
