import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FourthPage() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // prevent full page reload
    setSubmitted(true);
  }

  
  useEffect(() => {
    if (name) {
      console.log(`Name changed: ${name}`);
      document.title = `Hello, ${name}!`; 
    }
  }, [name]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Forms, Events & useEffect</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate('/fifth')} style={{ marginTop: "10px" }}>
        Go to Fifth Page
      </button>
      {submitted && <p>Hello, {name}!</p>}
    </div>
  );
}
