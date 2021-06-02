import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}

      {/* So funciona se a hora for maior q 12PM */}

      {currentTime > 12 && <h1>Why are u still working?</h1>}
    </div>
  );
}

export default App;
