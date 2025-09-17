import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SecondPage.css"; // import CSS

function Message({ text }) {
  return <p className="message">{text}</p>; // class selector
}

export default function SecondPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function Movetothird() {
    navigate("/third");
  }

  return (
    <div id="second-page">
      <h1>React State & Props</h1>
      <button className="count-btn" onClick={() => setCount(count + 1)}>
        Click me: {count}
      </button>
      <button id="nav-btn" onClick={Movetothird}>
        Page 3
      </button>
      <Message text={`You have clicked ${count} times`} />
    </div>
  );
}
