import React from 'react'

function DeleteCard({deleteItem}) {
  function dragOverHandler(e) {
    e.preventDefault();
  }
  return (
    <div
        onDrop={deleteItem}
        onDragOver={dragOverHandler}
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          clear: "both",
        }}
      >
        {" "}
        DELETE
      </div>
  )
}

export default DeleteCard