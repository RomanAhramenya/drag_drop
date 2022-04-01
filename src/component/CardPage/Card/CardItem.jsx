import React from "react";
import { connect } from "react-redux";
import { SortAC, createCardAC } from "../../../redux/reducers/dataCardreducer";
function CardItem({
  text,
  items,
  name,
  item,
  createCardAC,
  drag,
  setDrag,
  setDragBoard,
  dragBoard,
  SortAC,
  setIndexDelete,
  indexDelete,deleteItem

}) {
  
  function dragLeaveHandler(e) {}
  function dragEndHandler(e) {}
  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragStartHandler( card, dragBoard, index) {
    setIndexDelete(index);
    setDrag(card);
    setDragBoard(dragBoard);
    console.log("start", card, dragBoard, index);
  }

  const dragDropHandler = (e, card, path, index) => {
    console.log("drop", name, path, index, drag, indexDelete);
    if (path === dragBoard) {
      return  SortAC(name, path, index, drag, indexDelete);
    }
    e.preventDefault();
    createCardAC(name, path, drag, index);
    deleteItem(name, dragBoard, drag);
    setDrag("");
  }

  return (
    <div
      onDragStart={() => {
        dragStartHandler(
          items[name][text][item],
          text,
          items[name][text].indexOf(items[name][text][item])
        );
      }}
      onDragLeave={(e) => {
        dragLeaveHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDragOver={(e) => {
        dragOverHandler(e);
      }}
      onDrop={(e) => {
        dragDropHandler(
          e,
          items[name][text][item],
          text,
          items[name][text].indexOf(items[name][text][item])
        );
      }}
      draggable
    >
      {items[name][text][item]}
    </div>
  );
}

export default connect(null, { createCardAC, SortAC })(CardItem);
