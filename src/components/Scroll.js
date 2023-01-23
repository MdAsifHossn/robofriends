import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid #220990",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
