/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import useStorage from "./customhooks/useStorage";

function App() {
  const { setStorage } = useStorage();

  return (
    <div>
      <h1>Enter your text</h1>
      <input
        type="text"
        placeholder="Start typing.."
        onChange={(e) => setStorage(e.target.value)}
      />
    </div>
  );
}

export default App;