import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [tab, setTab] = useState([1, 2, 3, 4]);

  const [counter, setCounter] = useState(0);

  console.log("App");

  // count = 67; // Interdit

  // tab.push(78);

  const hello = "hello";

  return (
    <>
      <Header />
      <h1>Hello</h1>
      {tab.map((elem, index) => {
        return <p key={index}>{elem}</p>;
      })}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
