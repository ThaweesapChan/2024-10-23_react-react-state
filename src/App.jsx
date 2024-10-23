//https://platform.techupth.com/learn/courses/fsd7/react/react-react-state/assignment?courseModuleId=199&courseTopicId=960

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedSayHi, setSelectedSayHi] = useState("Greeting Message");

  const handleButtonClick = (sayHi) => {
    setSelectedSayHi(sayHi);
  };

  return (
    <div className="App">
      <div className="greeting-container">{selectedSayHi}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("สวัสดี")}>สวัสดี!</button>
        <button onClick={() => handleButtonClick("Hi!")}>Hi!</button>
        <button onClick={() => handleButtonClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;