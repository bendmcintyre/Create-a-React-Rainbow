import React from "react";

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.colorVal }}>
      <p>{props.colorVal}</p>
    </div>
  );
}

export default ColorBlock;
