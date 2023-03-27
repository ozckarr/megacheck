import React from "react";

function Check({ checkSettings }) {
  console.log(checkSettings.thickness);
  return (
    <div
      className="check checkPrimary"
      style={{
        height: checkSettings.height + "cm",
        width: checkSettings.width + "cm",
      }}
    >
      <div
        className="checkBorder"
        style={{
          margin: checkSettings.margin + "cm",
          padding: checkSettings.margin + "cm",
          border: checkSettings.thickness + "px solid black",
        }}
      ></div>
    </div>
  );
}

export default Check;

//checkBlackWhite
