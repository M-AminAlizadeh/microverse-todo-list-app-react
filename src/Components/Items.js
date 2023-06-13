/*eslint-disable */
import { useState, useEffect } from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Items"));
    if (items) {
      setItems(items);
    }
  }, [items]);

  return (
    <div className="items-container">
      {items
        ? items.map((item) => (
            <Item
              key={item.id}
              content={item.content}
              checkStatus={item.checkStatus}
            />
          ))
        : null}
    </div>
  );
};

export default Items;
