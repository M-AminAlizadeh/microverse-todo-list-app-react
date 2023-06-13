/*eslint-disable */
import { useState, useEffect } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(() => {
    return localStorage.getItem("Items")
      ? JSON.parse(localStorage.getItem("Items"))
      : [];
  });
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add item
  const handleClick = () => {
    const newItems = [...items];
    newItems.push({
      id: Math.floor(Math.random() * 1000),
      content: inputValue,
      checkStatus: false,
    });
    setItems(newItems);
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
