/*eslint-disable */
import Item from "./Item";

const Items = () => {
  const items = JSON.parse(localStorage.getItem("Items"));

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
