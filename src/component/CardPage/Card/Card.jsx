import React, { useState } from "react";
import { connect } from "react-redux";
import { createCardAC } from "../../../redux/reducers/dataCardreducer";
import CardItem from "./CardItem";
function Card({
  name,
  text,
  items,
  createCardAC,
  drag,
  setDrag,
  dragBoard,
  setDragBoard,
  deleteItem,
  data,
}) {
  const [value, setValue] = useState("");
  const [indexDelete, setIndexDelete] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    createCardAC(name, text, value);
  };
  function emptyCardOverHandler(e) {
    e.preventDefault();
  }
  function EmptyCardDrop(e) {
    e.preventDefault();
    if (data[name][text].length === 0) {
      createCardAC(name, text, drag);
      deleteItem(name, dragBoard, drag);
      setDrag("");
    }
  }
  return (
    <div
      onDrop={EmptyCardDrop}
      onDragOver={(e) => {
        emptyCardOverHandler(e);
      }}
      style={{
        width: "300px",
        height: "300px",
        border: "1px solid black",
        float: "left",
      }}
    >
      {text}
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </form>
      {Object.keys(items[name][text]).map((item, index) => {
        return (
          <CardItem
            key={index}
            setDragBoard={setDragBoard}
            dragBoard={dragBoard}
            drag={drag}
            setDrag={setDrag}
            text={text}
            items={items}
            item={item}
            name={name}
            indexDelete={indexDelete}
            setIndexDelete={setIndexDelete}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}
let mapStateToProps = (state) => ({
  data: state.dataCard.ListCard,
});
export default connect(mapStateToProps, { createCardAC })(Card);
