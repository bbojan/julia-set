import React from "react";
import "./App.css";
import { Canvas } from "./views/Canvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Julia set</p>
      </header>
      <Canvas />
    </div>
  );
}

export default App;
