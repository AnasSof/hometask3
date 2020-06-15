import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled from "styled-components";

const Title = styled.h1`
color: blue;
font-size: 2em;
text-align: left;
`
function App() {
  return (
    <div className="App">
      <Title>
        Владимирский Централ
      </Title>
      <p className="test_scss">test</p>
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
      </header>
    </div>
  );
}

export default App;
