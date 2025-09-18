import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SixthPage() {
  const [count, setCount] = useState(0);
  const [dogUrl, setDogUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setDogUrl(data.message));
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Dog Fetcher</h1>
      <button onClick={() => setCount(count + 1)}>Fetch Dog</button>
      <p>Fetched {count} times</p>
      {dogUrl && <img src={dogUrl} alt="dog" style={{ maxWidth: "400px" }} />}
      <button onClick={() => navigate("/seventh")}>Go to Seventh Page</button>
    </div>
  );
}
