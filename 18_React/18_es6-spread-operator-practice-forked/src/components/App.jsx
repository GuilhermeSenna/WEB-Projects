import React, { useState } from "react";

function App() {

  const [text, setText] = useState("Digite aqui");
  const [items, setItems] = useState([]);

  function eventHandlerText(event){
    setText(event.target.value);
  }

  function eventHandlerAdd(){
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={eventHandlerText}
        type="text"
        value={text} />
        <button
        onClick={eventHandlerAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {   items.map((todoItem) => <li>{todoItem}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
