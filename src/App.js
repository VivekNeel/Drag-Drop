import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./list";
function App() {
  return <List items={"first second third fourth".split(" ")} />;
}

export default App;
