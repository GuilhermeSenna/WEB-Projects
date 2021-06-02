import React, { useState } from "react";

function App() {

  setInterval(update, 1000)

  let actual_time = new Date().toLocaleTimeString();

  const [time, setTime] = useState(actual_time);

  function update(){
    actual_time = new Date().toLocaleTimeString();
    setTime(actual_time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
