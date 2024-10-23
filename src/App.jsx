import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleThaiClick = () => {
    setGreeting("สวัสดี!");
  };

  const handleEnglishClick = () => {
    setGreeting("Hi!");
  };

  const handleChanaClick = () => {
    setGreeting("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEnglishClick}>Hi!</button>
        <button onClick={handleChanaClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
