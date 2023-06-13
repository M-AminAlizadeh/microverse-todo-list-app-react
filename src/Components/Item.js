/* eslint-disable */
const Item = ({ id, content, checkStatus }) => {
  return (
    <div className="item-container" id={id}>
      <div>
        <input type="checkbox" defaultChecked={checkStatus} />
        <span className="item-content">{content}</span>
      </div>
      <img
        src="https://img.icons8.com/matisse/20/waste.png"
        alt="waste"
        id={id}
      />
    </div>
  );
};

export default Item;
