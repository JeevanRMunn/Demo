import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ThirdPage() {
  const [items, setItems] = useState(["Apples", "Bananas", "Cherries"]);
  const [showList, setShowList] = useState(true);
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  function addItem() {
    if (newItem.trim() === "") return;
    const updatedItems = new Set(items);
    updatedItems.add(newItem);
    setItems([...updatedItems]);
    setNewItem("");
  }

  function MovetoFourth(){
    navigate('/fourth');
  }

  return (
    <div>
      <h1>Lists & Conditional Rendering</h1>

      
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

      
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>
        Add Item
      </button>
      <button onClick={MovetoFourth}>Page 4</button>
    </div>
  );
}
