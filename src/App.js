import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [text, setText] = useState("Monday");
  let [State, setState] = useState(true);
  function changeName() {
    setText("NotMonday");
    setState(false);
  }
  return (
    <div className="App">
      <button onClick={changeName}>ChangeName</button>
      <button
        onClick={() => {
          setText("Monday"), setState(true);
        }}
      >
        Reset
      </button>
      <div>{text}</div>
      {State ? (
        <div style={{ backgroundColor: "yellow" }}>Since it's Monday</div>
      ) : (
        <div style={{ backgroundColor: "lightBlue" }}>
          Since it's not Monday
        </div>
      )}
    </div>
  );
}
