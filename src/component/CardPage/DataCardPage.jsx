import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "./Card/Card";
import {
  createCardAfterAC,
  drogAndDropDeletedAC,
  SortAC,
} from "../../redux/reducers/dataCardreducer";
import DeleteCard from "./DeleteCard";
import CardPageForm from "./Card/CardPageForm";
function DataCardPage({
  text,
  data,
  drogAndDropDeletedAC,
  SortAC,
  createCardAfterAC,
}) {
  const [drag, setDrag] = useState("");
  const [dragBoard, setDragBoard] = useState("");
  const [deleteCard, setDeleteCard] = useState(false);

  function deleteItem(e) {
    drogAndDropDeletedAC(text, dragBoard, drag);
  }
  return (
    <div>
      <CardPageForm text={text} createCardAfterAC={createCardAfterAC} />
      {data[text] &&
        Object.keys(data[text]).map((item, index) => {
          return (
            <Card
              key={index}
              setDragBoard={setDragBoard}
              dragBoard={dragBoard}
              drag={drag}
              setDrag={setDrag}
              items={data}
              name={text}
              text={item}
              deleteItem={deleteItem}
            />
          );
        })}
      <DeleteCard deleteItem={deleteItem} />
    </div>
  );
}
let mapStateToProps = (state) => ({
  data: state.dataCard.ListCard,
});

export default connect(mapStateToProps, {
  createCardAfterAC,
  drogAndDropDeletedAC,
  SortAC,
})(DataCardPage);
