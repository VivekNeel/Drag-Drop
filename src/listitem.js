import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ListItem = ({ index, moveCard }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        height: 100,
        width: "50%",
        margin: 16,
        border: "2px solid green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
      }}
    >
      <div>{index}</div>
    </div>
  );
};

export default ListItem;
