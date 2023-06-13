/*eslint-disable */
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // Add button
  const handleClick = () => {
    const newItems = items;
    newItems.push({
      id: Math.floor(Math.random() * 1000),
      content: inputValue,
      checkStatus: true,
    });
    setItems(newItems);
    // Update localstorage
    localStorage.setItem("Items", JSON.stringify(items));
    // Reset the input
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input
        placeholder="Add your task ..."
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <img
        src="https://img.icons8.com/ios-filled/30/plus.png"
        alt="plus"
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
};

export default Input;
