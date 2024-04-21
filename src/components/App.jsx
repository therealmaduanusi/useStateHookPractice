import React, { useState } from "react";

function App() {
  // let now = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState("Time");
  function updateTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
    setInterval(updateTime, 1000);
  }
  // function updateTime() {
  //   setTime("hello");
  // }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
